'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Globe2, Languages, PackageCheck } from 'lucide-react';

const benefits = [
  {
    icon: Globe2,
    title: 'Trusted across 15+ countries',
    description: 'Appointik is not limited to one market. Clinics across regions use it for daily appointments, records, billing and patient communication.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Languages,
    title: 'Multilingual notifications',
    description: 'Send appointment and reminder messages in multiple regional and international languages to communicate clearly with more patients.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: PackageCheck,
    title: 'Complete clinic package',
    description: 'Get Clinic Web App, Android app, iPhone-installable web app, dedicated Patient App and custom appointment booking portals in one solution.',
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

      <div className="grid md:grid-cols-3 gap-8">
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
