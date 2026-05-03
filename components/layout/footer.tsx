import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';


const footerLinks = {
  product: [
    { name: 'Clinic Web App', href: 'https://clinic.appointik.in/login' },
    { name: 'Clinic Mobile App', href: 'https://play.google.com/store/apps/details?id=com.samrithtech.appointik' },
    { name: 'Patient Mobile App', href: 'https://play.google.com/store/apps/details?id=com.samrithtech.appointik.patient' },
    { name: 'Appointik G Mobile App', href: 'https://play.google.com/store/apps/details?id=com.samrithtech.appointikg' },
    { name: 'Booking Portal', href: 'https://appointik.in/demo/' },
    { name: 'Booking Portal (Time Slots)', href: 'https://appointik.in/demotimeslot/' },
  ],
  resources: [
    { name: 'Clinic Software Features', href: '/features' },
    { name: 'Affordable Clinic Software Pricing', href: '/pricing' },
    { name: 'Blogs', href: 'https://appointik.blogspot.com/' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Support', href: '/support' },
  ],
  specialties: [
    { name: 'Dental Clinic Software', href: '/specialties/dental' },
    { name: 'Physiotherapy Clinic Software', href: '/specialties/physiotherapy' },
    { name: 'Pediatric Clinic Software', href: '/specialties/paediatrics' },
    { name: 'Ayurveda Clinic Software', href: '/specialties/ayurveda' },
  ],
  company: [
    { name: 'Contact', href: '/support' },
    { name: 'Privacy Policy', href: 'https://appointik.in/privacy.html' },
  ],
};

function FooterLink({ href, name }: { href: string; name: string }) {
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-royal-600 transition-colors"
      >
        {name}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-royal-600 transition-colors"
    >
      {name}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo-square.png" alt="Appointik logo" width={36} height={36} className="rounded-lg" priority />
              <span className="text-xl font-bold text-gray-900">Appointik</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Lightweight clinic management software trusted by 1,000+ healthcare professionals across India and beyond.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>appointikteam@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href} name={link.name} />
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href} name={link.name} />
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Specialties</h3>
            <ul className="space-y-2">
              {footerLinks.specialties.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href} name={link.name} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href} name={link.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2026 Samrith Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>🇮🇳 Made in India</span>
              <span>• HIPAA Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
