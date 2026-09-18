'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Building2, FileText, Globe2, Languages, LockKeyhole, PackageCheck, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Globe2,
    title: 'Trusted across 15+ countries',
    description: 'Appointik is not limited to one market. Clinics across regions use it for daily appointments, records, billing and patient communication.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Languages,
    title: '20-language support',
    description: 'View both the Android Clinic App and Android Patient App in any of 20 languages. Prescriptions, invoices and patient reminders also support 20 languages.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: FileText,
    title: 'Your own letterhead',
    description: 'Upload a digital copy of your letterhead and generate prescriptions and invoices on it, keeping your clinic branding consistent.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileText,
    title: 'Clinic letters and certificates',
    description: 'Generate referral letters, lab requests, medical certificates, fitness clearance notes, consent forms and custom clinic letters.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Building2,
    title: 'Multi-clinic support',
    description: 'Manage a primary clinic and additional branches from one clinic management platform as your practice grows.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-role staff access',
    description: 'Max includes unlimited staff member accounts with role-based access. Pay per clinic, with no per-doctor or per-staff charges.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: LockKeyhole,
    title: 'PIN-protected sections',
    description: 'Add extra security for sensitive clinic information by locking selected sections behind a PIN.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: PackageCheck,
    title: 'Aggregator Portal',
    description: 'Included in Pro and Max plans, the Aggregator Portal is useful for insurance companies and owners of multiple clinics.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: PackageCheck,
    title: 'Complete clinic package',
    description: 'Get Clinic Web App, Android Clinic App, Android Patient App, iOS installable Web App, custom appointment booking portals, expense tracking and expense reports in one solution.',
    color: 'bg-green-50 text-green-600',
  },
];

export function BenefitCards() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why clinics worldwide choose Appointik
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Built for healthcare professionals who need one affordable platform for clinic operations, patient access and communication
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${benefit.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
