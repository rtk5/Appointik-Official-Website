'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Check, Zap, Smartphone, MessageSquare } from 'lucide-react';

/* --------------------------------------------------
   Plans
-------------------------------------------------- */

const plans = [
  {
    id: 'lite-plan',
    name: 'Lite Plan',
    icon: Zap,
    description: 'For clinics that prefer to manage everything from the mobile app.',
    price: {
      monthly: 249,
      currency: '₹',
      usdMonthly: 3.5
    },
    features: [
      'Android Clinic App',
      'Android Patient App',
      'Unlimited Patients and Appointments, Up to 2 Doctors',
      'EMR/EHR',
      'Referral & Lab request forms',
      'Prescriptions & Invoices',
      'Notifications - SMS, WhatsApp and Event',
      '20 international and regional languages',
      'Expense Tracker',
      'Reports',
      'Inventory Management',
      'Follow-ups and Surveys',
      'PIN Lock for Sensitive Sections',
      '14 Days FREE Trial Period'
    ],
    popular: false,
    regionNote: 'Available worldwide'
  },
  {
    id: 'pro-plan',
    name: 'Pro Plan',
    icon: Smartphone,
    description: 'For clinics that want mobile convenience with web app access.',
    price: {
      monthly: 349,
      currency: '₹',
      usdMonthly: 4.5
    },
    features: [
      'Everything in Lite, plus',
      'Web App (Desktop/Laptop)',
      'iOS installable Web App',
      'Dedicated Appointment Booking Portal',
      'Aggregator Portal (Insurance Companies & Multi-Clinic Owners)',
      'Letters'
    ],
    popular: true
  },
  {
    id: 'max-plan',
    name: 'Max Plan',
    icon: MessageSquare,
    description: 'For clinics that need multi-clinic support and staff roles.',
    price: {
      monthly: 449,
      currency: '₹',
      usdMonthly: 5.5
    },
    features: [
      'Everything in Pro, plus',
      'Multi-Clinic Support (1 Primary Included)',
      'Extra Branch Add-On (₹250/mo per branch)',
      'Multi-Role Staff Access (Receptionist, Doctor, Pharmacist, Lab)',
      'Unlimited Staff Member Accounts — No Additional Charges'
    ],
    popular: false
  }
];

/* --------------------------------------------------
   Pricing Section
-------------------------------------------------- */

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section-container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Affordable clinic software pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Choose one of the most affordable clinic software options with transparent pricing, no hidden costs, instant signup, instant renewal, and complete tools for appointments, EMR, billing, expense tracking, prescriptions, patient reminders, multi-clinic support and multi-role staff access. Plans start at ₹249/month. Annual billing saves 10% on rupee prices; dollar prices are not discounted.
        </p>

        <p className="text-lg font-semibold text-royal-700 max-w-3xl mx-auto mb-8">
          Pay per clinic, with no per-doctor or per-staff charges. Max includes
          unlimited staff member accounts with Multi-Role Staff Access at no additional cost.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-royal-500 text-white shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                isAnnual
                  ? 'bg-royal-500 text-white shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
            </button>
          </div>

          <Badge className="ml-3 bg-teal-100 text-teal-700 self-center">
            Save 10% annually (INR only)
          </Badge>
        </div>

      </motion.div>

      {/* Plans */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const price = isAnnual
            ? Math.round(plan.price.monthly * 12 * 0.9)
            : plan.price.monthly;
          const usdPrice = plan.price.usdMonthly * (isAnnual ? 12 : 1);
          const unit = isAnnual ? 'per year' : 'per month';

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`relative p-8 h-full rounded-3xl bg-white ${
                  plan.popular
                    ? 'border-2 border-royal-100 shadow-2xl scale-105'
                    : 'border border-gray-200 shadow-lg'
                }`}
              >

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-royal-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gray-100">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold">
                    {plan.price.currency}
                    {price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-gray-600">{unit}</div>
                  <div className="text-sm text-gray-500">
                    ${usdPrice} {unit}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 shrink-0 text-teal-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
