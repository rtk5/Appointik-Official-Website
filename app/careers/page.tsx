import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowRight, Briefcase, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = pageMetadata(
  'Careers - Part-Time Sales Partners',
  'Register as an Appointik Sales Partner. Sell to doctors, clinics and small insurance companies. Part-time, commission-only work with no fixed salary.',
  '/careers/'
);

const registrationMessage = 'Hello Appointik team, I would like to register as a part-time Sales Partner. Please share the registration process and commission terms.\n\nName: \nCity / Region: \nPhone: \nSales experience (if any): ';
const emailUrl = `mailto:appointikteam@gmail.com?subject=${encodeURIComponent('Sales Partner Registration Request')}&body=${encodeURIComponent(registrationMessage)}`;
const whatsappUrl = `https://wa.me/919663144725?text=${encodeURIComponent(registrationMessage)}`;

const responsibilities = [
  'Introduce Appointik to doctors, clinics and small insurance companies.',
  'Explain how Appointik can help with their clinic software needs.',
  'Follow up with interested prospects and help turn interest into sales.',
  'Register with the Appointik team before starting to sell as a partner.',
];

export default function CareersPage() {
  return (
    <div className="pt-16">
      <section className="section-container bg-gradient-to-br from-royal-50 via-white to-teal-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-royal-100 px-4 py-2 text-sm font-semibold text-royal-700">
            <Briefcase className="w-4 h-4" aria-hidden="true" />
            Careers at Appointik
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Help more clinics discover Appointik
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Join us as a Sales Partner and introduce our medical software to doctors,
            clinics and small insurance companies. Turn your sales efforts into earnings.
          </p>
        </div>
      </section>

      <section className="section-container bg-white" aria-labelledby="sales-partner-title">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <article className="lg:col-span-2 rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4 text-sm font-medium">
                <span className="rounded-full bg-royal-50 text-royal-700 px-3 py-1">Part-time</span>
                <span className="rounded-full bg-teal-50 text-teal-700 px-3 py-1">Commission only</span>
              </div>
              <h2 id="sales-partner-title" className="text-3xl font-bold text-gray-900">Sales Partner</h2>
              <p className="mt-4 text-gray-600">
                We are looking for part-time Sales Partners who can connect with potential
                customers and sell Appointik. You must register with us before starting
                your sales activities as an Appointik partner.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What you will do</h3>
              <ul className="space-y-4">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-teal-600 mt-1" aria-hidden="true" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-royal-50 p-6">
              <h3 className="text-xl font-semibold mb-3">Compensation</h3>
              <p className="text-gray-700">
                This is a commission-only opportunity with no fixed salary. Compensation
                is based entirely on sales results, with attractive commission for successful
                sales. Contact our team for the commission rates and terms before you register.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">How to get started</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                <li>Send us a registration request with your name, city or region, contact details and any sales experience.</li>
                <li>Discuss the opportunity and commission terms with our team, then complete partner registration.</li>
                <li>Once registered, start introducing Appointik to prospective customers and earn commission based on your results.</li>
              </ol>
            </div>
          </article>

          <aside className="rounded-3xl bg-slate-50 border border-gray-200 p-6 sm:p-8" aria-labelledby="registration-title">
            <h2 id="registration-title" className="text-2xl font-bold">Interested in joining?</h2>
            <p className="mt-4 mb-6 text-gray-600">
              Contact the Appointik team to request partner registration and learn about
              commission terms. Sending a request starts the conversation; registration is completed with our team.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full rounded-xl bg-royal-500 hover:bg-royal-600 text-white">
                <a href={emailUrl}><Mail className="w-4 h-4 mr-2" aria-hidden="true" />Request registration</a>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-xl bg-white hover:bg-white text-teal-700 border-teal-500">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />Contact on WhatsApp</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 break-words">Email: appointikteam@gmail.com</p>
            <Link href="/features/" className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-royal-700 focus-outline">
              Explore Appointik <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
