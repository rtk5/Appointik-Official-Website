'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2,
  Users, 
  Calendar, 
  UserCheck, 
  CreditCard, 
  Pill, 
  FilePlus2,
  LockKeyhole,
  Languages,
  Package, 
  Globe, 
  BarChart3,
  ReceiptText,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    id: 'patient-management',
    title: 'Patient Management',
    icon: Users,
    description: 'Complete patient profiles with medical history',
    features: [
      'Comprehensive patient profiles with photos and contact details',
      'Complete medical history tracking with chronological records',
      'Document storage for lab reports, X-rays, and other medical files',
    ]
  },
  {
    id: 'appointment-scheduling',
    title: 'Appointment Scheduling',
    icon: Calendar,
    description: 'Smart scheduling with automated reminders',
    features: [
      'Schedule multiple appointments at a time',
      'Auto increment next available appointment time',
      'Automated SMS and WhatsApp appointment reminders',
      'Appointment reminders in 20 regional and international languages',
      'Patient follow-up scheduling with reminders',
      'Filter appointments by doctor for quick access',
    ]
  },
  {
    id: 'letters-documents',
    title: 'Letters & Documents',
    icon: FilePlus2,
    description: 'Generate clinical summaries, letters and other clinic documents',
    isNew: true,
    features: [
      'Create clinical visit summaries and patient case summaries',
      'Generate referral letters, medical certificates and other clinic documents',
      'Keep clinic documents consistent with reusable templates',
    ]
  },
  {
    id: 'multilingual-notifications',
    title: '20-Language Support',
    icon: Languages,
    description: 'Android app interfaces, prescriptions, invoices and reminders in 20 languages',
    isNew: true,
    features: [
      'View the Android Clinic App interface in any of 20 languages',
      'View the Android Patient App interface in any of 20 languages',
      "Generate prescriptions and invoices in the patient's preferred language",
      'Send appointment reminders in 20 regional and international languages',
      'Improve patient communication with language-friendly documents and messages',
      'Support reminders and updates through SMS and WhatsApp workflows',
    ]
  },
  {
    id: 'doctors-consultants',
    title: 'Doctors & Consultants',
    icon: UserCheck,
    description: 'Multi-doctor practice management',
    features: [
      'Secure multi-device access for doctors and clinic staff',
      'Multiple doctor profiles with individual schedules',
      'Consultation notes sharing between doctors',
    ]
  },
  {
    id: 'multi-clinic-support',
    title: 'Multi-Clinic Support',
    icon: Building2,
    description: 'Manage multiple clinic branches from one account',
    isNew: true,
    features: [
      'Run a primary clinic and add extra branches as your practice grows',
      'Organize appointments, patients and clinic operations across locations',
      'Keep branch workflows connected without switching between separate systems',
      'Useful for growing clinics, polyclinics and multi-location practices',
    ]
  },
  {
    id: 'multi-role-staff-access',
    title: 'Multi-Role Staff Access',
    icon: ShieldCheck,
    description: 'Unlimited staff member accounts with role-based access, included in Max',
    isNew: true,
    features: [
      'Give role-based access to receptionists, doctors, pharmacists and lab staff',
      'Create unlimited staff member accounts at no additional charge',
      'Pay per clinic, with no per-doctor or per-staff fees',
      'Let each staff member work with the clinic tools relevant to their role',
      'Improve team coordination while keeping sensitive sections protected',
      'Designed for clinics that need structured staff workflows',
    ]
  },
  // {
  //   id: 'emr-ehr',
  //   title: 'EMR/EHR',
  //   icon: FileText,
  //   description: 'Electronic medical records system',
  //   videoUrl: '/videos/emr-system.mp4',
  //   features: [
  //     'Comprehensive electronic medical records with templates',
  //     'Progress notes and treatment plan documentation',
  //     'Vital signs tracking with graphical trends',
  //     'Lab results integration with normal range indicators',
  //     'Medical imaging storage and viewer integration',
  //     'ICD-10 coding support for standardized diagnoses',
  //     'HIPAA-compliant data storage and access controls'
  //   ]
  // },
  {
    id: 'billing',
    title: 'Billing',
    icon: CreditCard,
    description: 'Integrated billing and payment tracking',
    features: [
      'Dispensary billing with medicine inventory integration',
      'Clinic billing for consultations and procedures',
      'Upload a digital copy of your letterhead and generate invoices on it',
      'Lab billing for diagnostic tests and reports',
    ]
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    icon: ReceiptText,
    description: 'Track clinic expenses and review expense reports',
    isNew: true,
    features: [
      'Add and manage clinic expenses from the web app and Android app',
      'Categorize daily costs such as rent, supplies, utilities and staff expenses',
      'Review expense reports to understand clinic spending patterns',
      'Keep income, billing and expense visibility together for better clinic decisions',
    ]
  },
  {
    id: 'security-pin-lock',
    title: 'PIN Lock Security',
    icon: LockKeyhole,
    description: 'Extra protection for sensitive clinic information',
    isNew: true,
    features: [
      'Lock selected sections with a PIN for extra security',
      'Protect sensitive patient, clinic and financial information',
      'Reduce accidental access on shared clinic devices',
      'Add a simple privacy layer for doctors and clinic administrators',
    ]
  },
  {
    id: 'e-prescription',
    title: 'E-Prescription',
    icon: Pill,
    description: 'Digital prescription with drug database',
    features: [
      'Custom prescription templates for faster consultations',
      'Upload a digital copy of your letterhead and generate prescriptions on it',
      'Comprehensive drug database with dosage recommendations',
      'Electronic signature integration for legal compliance',
      'Prescription history tracking for each patient',
    ]
  },
  // {
  //   id: 'online-consultations',
  //   title: 'Online Consultations',
  //   icon: Video,
  //   description: 'Telemedicine and virtual appointments',
  //   videoUrl: '/videos/telemedicine.mp4',
  //   features: [
  //     'Built-in video consultation platform',
  //     'WhatsApp and Google Meet integration',
  //     'Screen sharing for reviewing reports and images',
  //     'Digital prescription delivery during online consultations',
  //     'Consultation recording for future reference (with consent)',
  //     'Payment gateway integration for online consultation fees',
  //     'Waiting room feature for virtual appointments',
  //     'Technical support for patients during consultations'
  //   ]
  // },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    icon: Package,
    description: 'Medicine and supplies tracking',
    isNew: true,
    features: [
      'Integration with prescription module for automatic stock deduction'
    ]
  },
  {
    id: 'aggregator-portal',
    title: 'Aggregator Portal',
    icon: Building2,
    description: 'A portal for insurance companies and owners of multiple clinics',
    isNew: true,
    features: [
      'Included from the Pro Plan and available in the Max Plan',
      'Useful for insurance companies',
      'Useful for owners of multiple clinics',
    ]
  },
  {
    id: 'web-portal',
    title: 'Custom Booking Portal',
    icon: Globe,
    description: 'Online booking with configurable services, pricing and doctor-specific time slots',
    features: [
      'Branded patient portal with your clinic information',
      'Online appointment booking with real-time availability',
      'Custom appointment booking web portal for each clinic',
      'Configure offered services, pricing and time slots in the Clinic Web App',
      'Assign services and time slots to specific doctors',
      'Appointment history and upcoming appointment reminders',
    ]
  },
  {
    id: 'Surveys and feedback',
    title: 'Surveys and feedback',
    icon: BarChart3,
    description: 'Patient feedback and survey management',
    features: [
      'Comprehensive Patient feedback and survey management',
    ]
  }
];

const planFeatures = new Set([
  'web-portal',
  'aggregator-portal',
  'multi-clinic-support',
  'multi-role-staff-access',
]);

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Complete clinic management suite
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Manage appointments, patient records, prescriptions and billing in one
          place. Explore tools for your clinic, your team and your patients.
        </p>
      </motion.div>

      <div className="lg:hidden mb-6">
        <label htmlFor="feature-selection" className="block text-sm font-semibold text-gray-900 mb-2">
          Explore a feature
        </label>
        <select
          id="feature-selection"
          value={activeTab}
          onChange={(event) => setActiveTab(event.target.value)}
          aria-controls="feature-details"
          className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 p-3 focus-outline"
        >
          {features.map((feature) => (
            <option key={feature.id} value={feature.id}>{feature.title}</option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-10 items-start">
        <nav aria-label="Explore features" className="hidden lg:block rounded-2xl bg-gray-50 p-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeTab === feature.id;
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveTab(feature.id)}
                aria-pressed={isActive}
                aria-controls="feature-details"
                className={`flex items-center gap-3 w-full p-3 rounded-xl text-left text-sm font-medium transition-colors focus-outline ${
                  isActive
                    ? 'bg-white shadow-sm text-royal-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{feature.title}</span>
              </button>
            );
          })}
        </nav>

        <div id="feature-details" className="min-w-0 lg:sticky lg:top-24">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                hidden={activeTab !== feature.id}
                aria-labelledby={`feature-heading-${feature.id.replaceAll(' ', '-')}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-royal-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-royal-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 id={`feature-heading-${feature.id.replaceAll(' ', '-')}`} className="text-2xl md:text-3xl font-bold text-gray-900">
                        {feature.title}
                      </h2>
                      {feature.isNew && (
                        <Badge className="bg-teal-100 hover:bg-teal-100 text-teal-700">NEW</Badge>
                      )}
                    </div>
                    <p className="text-lg text-gray-600 mt-2">{feature.description}</p>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-4">What you can do</h3>
                <ul className={`grid gap-4 ${feature.features.length > 3 ? 'md:grid-cols-2' : ''}`}>
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" aria-hidden="true" />
                      <span className="text-gray-700 leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                {planFeatures.has(feature.id) && (
                  <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200">
                    {feature.id === 'web-portal' && (
                      <Button asChild className="bg-royal-600 hover:bg-royal-700 text-white rounded-xl">
                        <a href="https://book.appointik.in/c/appointik-team-clinic" target="_blank" rel="noopener noreferrer">
                          Try Booking Portal<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" className="rounded-xl bg-white">
                      <Link href="/pricing/">View Plans</Link>
                    </Button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
