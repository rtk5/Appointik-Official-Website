import type { MetadataRoute } from 'next';

const baseUrl = 'https://appointik.in';

const routes = [
  '',
  '/features/',
  '/pricing/',
  '/success-stories/',
  '/support/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/pricing/' || route === '/features/' ? 0.9 : 0.7,
  }));
}
