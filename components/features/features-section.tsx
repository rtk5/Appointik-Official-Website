'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
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
    videoUrl: '/videos/patient-management.mp4',
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
    videoUrl: '/videos/appointment-scheduling.mp4',
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
    description: 'Generate clinic letters, certificates and forms',
    videoUrl: '/videos/letters-documents.mp4',
    isNew: true,
    features: [
      'Generate referral letters for specialist and hospital referrals',
      'Create lab request letters with patient and clinical details',
      'Issue medical certificates and fitness clearance letters',
      'Prepare consent forms and custom clinic letters',
      'Keep clinic documents consistent with reusable templates',
    ]
  },
  {
    id: 'multilingual-notifications',
    title: '20-Language Support',
    icon: Languages,
    description: 'Android app interfaces, prescriptions, invoices and reminders in 20 languages',
    videoUrl: '/videos/multilingual-notifications.mp4',
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
    videoUrl: '/videos/doctors-management.mp4',
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
    videoUrl: '/videos/multi-clinic-support.mp4',
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
    videoUrl: '/videos/multi-role-staff-access.mp4',
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
    videoUrl: '/videos/billing-system.mp4',
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
    videoUrl: '/videos/expense-tracker.mp4',
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
    videoUrl: '/videos/security-pin-lock.mp4',
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
    videoUrl: '/videos/e-prescription.mp4',
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
    videoUrl: '/videos/inventory.mp4',
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
    videoUrl: '/videos/web-portal.mp4',
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
    videoUrl: '/videos/reports.mp4',
    features: [
      'Comprehensive Patient feedback and survey management',
    ]
  }
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const activeFeature = features.find(feature => feature.id === activeTab) || features[0];

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Complete clinic management suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to run a modern healthcare practice in one integrated platform: Clinic Web App, Android Clinic App, Android Patient App, iOS installable Web App, multi-clinic support, multi-role staff access, custom booking portal, clinic letters, prescriptions, invoices and reminders in 20 languages, expense tracking, expense reports and PIN-protected sensitive sections
        </p>
      </motion.div>

      {/* Tab Navigation - Always Visible */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex space-x-2 p-1 bg-gray-100 rounded-2xl min-w-max mx-auto w-fit">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeTab === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex flex-col items-center p-4 space-y-2 rounded-xl transition-all min-w-[120px] ${
                  isActive
                    ? 'bg-white shadow-sm text-royal-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium text-center leading-tight">
                  {feature.title}
                </span>
                {feature.isNew && (
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700 text-xs px-2 py-0">
                    NEW
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Feature Details */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-royal-100 rounded-2xl flex items-center justify-center">
                <activeFeature.icon className="w-8 h-8 text-royal-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  {activeFeature.title}
                  {activeFeature.isNew && (
                    <Badge className="bg-teal-500 hover:bg-teal-600 text-white">
                      NEW
                    </Badge>
                  )}
                </h2>
                <p className="text-xl text-gray-600 mt-2">{activeFeature.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
              <div className="grid gap-3">
                {activeFeature.features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Demo/Video */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-white shadow-2xl rounded-3xl border-0">
              <div className="aspect-video bg-gradient-to-br from-royal-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <activeFeature.icon className="w-10 h-10 text-royal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {activeFeature.title} 
                  </h3>
                  <p className="text-gray-600 text-sm">
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Floating Feature Badge */}
            {/*<div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border">
               <div className="text-sm text-gray-600 mb-1">Feature Status</div> 
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Active</span> 
              </div>
            </div>
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
