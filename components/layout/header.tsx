'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Success Stories', href: '/success-stories' },
];

const doctorLoginUrl = 'https://clinic.appointik.in/login';
const patientAppUrl = 'https://play.google.com/store/apps/details?id=com.samrithtech.appointik.patient';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-square.png"
              alt="Appointik logo"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span className="text-xl font-bold text-gray-900">Appointik</span>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-gray-700 hover:text-royal-600 transition-colors focus-outline',
                  pathname === item.href && 'text-royal-600 font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              className="border-royal-500 text-royal-700 hover:bg-royal-50 rounded-2xl px-5 py-2 font-medium focus-outline"
            >
              <a
                href={doctorLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Doctor Login
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-teal-500 text-teal-700 hover:bg-teal-50 rounded-2xl px-5 py-2 font-medium focus-outline"
            >
              <a
                href={patientAppUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Patient Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="focus-outline">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block text-lg text-gray-700 hover:text-royal-600 transition-colors',
                      pathname === item.href && 'text-royal-600 font-medium'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t">
                  <div className="grid gap-3 mb-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-royal-500 text-royal-700 hover:bg-royal-50 rounded-2xl"
                    >
                      <a
                        href={doctorLoginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        Doctor Login
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-teal-500 text-teal-700 hover:bg-teal-50 rounded-2xl"
                    >
                      <a
                        href={patientAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        Patient Login
                      </a>
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
