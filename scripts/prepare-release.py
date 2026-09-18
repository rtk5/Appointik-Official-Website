"""Combine the static export with existing clinic assets; never publish or alter the source."""
import argparse
import fnmatch
import hashlib
import json
import shutil
from datetime import datetime, timezone
from pathlib import Path

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--hosting-source', type=Path, required=True)
args = parser.parse_args()
source = args.hosting_source.resolve()
config = json.loads((source / 'firebase.json').read_text())
hosting = config['hosting']
legacy = source / hosting['public']
export = root / 'out'
assert (export / 'careers/index.html').is_file(), 'Run npm run build first'
assert (legacy / 'privacy.html').is_file(), 'Existing privacy policy is required'
assert not hosting.get('rewrites'), 'Review unexpected hosting rewrites before staging'
expected_retired = {'arogyavardhini', 'shatayuphysio', 'jayamclinic', 'kdham-DrSanthosh', 'drkphysioplusclinic', 'specialties'}
assert all(f'{name}/**' in hosting['ignore'] for name in expected_retired)
retired = expected_retired | {'demo', 'demofree', 'demotimeslot'}
# Old demos are replaced by their configured permanent redirects.
for name in ('demo', 'demofree', 'demotimeslot'):
    for suffix in ('', '/', '/index.html'):
        assert any(r['source'] == f'/{name}{suffix}' and r['type'] == 301 and r['destination'] == 'https://book.appointik.in/c/appointik-team-clinic' for r in hosting['redirects'])

stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')
release = root / '.release' / f'marketing-{stamp}'
public = release / 'public'
public.mkdir(parents=True, exist_ok=False)

def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def excluded(relative):
    return (relative.parts[0] in retired
            or relative.as_posix() == 'icons/whatsapp.svg'
            or any(part.startswith('.') or part == 'node_modules' for part in relative.parts)
            or any(fnmatch.fnmatch(relative.as_posix(), pattern) for pattern in hosting['ignore']))

preserved = {}
for p in legacy.rglob('*'):
    rel = p.relative_to(legacy)
    if excluded(rel):
        continue
    assert not p.is_symlink(), f'Review symlink before release: {p}'
    if not p.is_file():
        continue
    target = public / rel
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(p, target)
    preserved[rel.as_posix()] = digest(p)

exported = {}
for p in export.rglob('*'):
    if not p.is_file():
        continue
    rel = p.relative_to(export)
    assert not p.is_symlink() and not excluded(rel), f'Unexpected export path: {rel}'
    target = public / rel
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(p, target)
    exported[rel.as_posix()] = digest(p)

# Check every untouched legacy file and every new export, not only a sample.
for rel, sha in preserved.items():
    if rel not in exported:
        assert digest(public / rel) == sha, rel
for rel, sha in exported.items():
    assert digest(public / rel) == sha, rel
assert digest(public / 'privacy.html') == digest(legacy / 'privacy.html')
assert all(not (public / name).exists() for name in retired)

# Firebase matches slash variants for explicit redirects; rely on trailingSlash instead.
hosting['redirects'] = [r for r in hosting['redirects'] if r['destination'] != r['source'] + '/']
hosting['public'] = 'public'
hosting['site'] = 'appointik-9500d'
hosting.pop('target', None)
# Deliberately exclude functions and deployment hooks from this release.
hosting.pop('predeploy', None)
hosting.pop('postdeploy', None)
(release / 'firebase.json').write_text(json.dumps({'hosting': hosting}, indent=2) + '\n')
(release / '.firebaserc').write_text(json.dumps({'projects': {'default': 'appointik-9500d'}}, indent=2) + '\n')
manifest = {
    'createdAt': datetime.now(timezone.utc).isoformat(),
    'project': 'appointik-9500d',
    'site': 'appointik-9500d',
    'hostingSource': str(source),
    'excludedFolders': sorted(retired),
    'exportFiles': exported,
    'preservedFiles': {rel: sha for rel, sha in preserved.items() if rel not in exported},
}
(release / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
(root / '.release' / 'latest.txt').write_text(str(release) + '\n')
print(json.dumps({'release': str(release), 'exportFiles': len(exported), 'preservedFiles': len(manifest['preservedFiles']), 'site': hosting['site']}, indent=2))
