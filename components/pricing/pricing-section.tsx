'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

import { Check, Zap, Smartphone, MessageSquare } from 'lucide-react';

/* --------------------------------------------------
   Razorpay Payment Button (DOM-safe, WORKING)
-------------------------------------------------- */

function RazorpayPaymentButton({ buttonId }: { buttonId: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    // Prevent duplicate injection
    if (formRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.setAttribute('data-payment_button_id', buttonId);

    formRef.current.appendChild(script);
  }, [buttonId]);

  return (
  <div className="w-full mt-6 flex justify-center">
    <form ref={formRef} />
  </div>
  );
}

/* --------------------------------------------------
   Plans
-------------------------------------------------- */

const plans = [
  {
    id: 'basic-with-ads',
    name: 'Basic Plan (With Ads)',
    icon: Zap,
    description: 'Best for clinics starting out. Full core features with ads.',
    price: {
      monthly: 125,
      annual: 115,
      currency: '₹',
      unit: 'per month',
      usdEquivalent: '$1.75 per month'
    },
    features: [
      'Unlimited Appointments',
      'Unlimited e-Prescriptions',
      'Unlimited Documents (EMR / EHR)',
      'Unlimited Billing & Payment Receipts',
      'Unlimited Patients, Doctors & Consultants',
      'Unlimited Calendar Event Notifications',
      'Secure Custom Web Portal (Free Version)',
      'Unlimited SMS & WhatsApp Notifications',
      "Notifications are sent from USER'S DEVICE",
      'Regional Languages Supported',
      'Patient App included',
      '1 Month FREE Trial Period'
    ],
    popular: false,
    razorpayButtonId: 'pl_SkUTgVT7n5sHHs',
    regionNote: 'Available worldwide'
  },
  {
    id: 'own-device',
    name: 'Own Device Plan',
    icon: Smartphone,
    description: 'Use your phone for SMS and WhatsApp – most popular choice',
    price: {
      monthly: 200,
      annual: 184,
      currency: '₹',
      unit: 'per month',
      usdEquivalent: '$2.75 per month'
    },
    features: [
      'Unlimited Appointments',
      'Unlimited e-Prescriptions',
      'Unlimited Documents (EMR / EHR)',
      'Unlimited Billing & Payment Receipts',
      'Unlimited Patients, Doctors & Consultants',
      'Unlimited Calendar Event Notifications',
      'Secure Custom Web Portal (Free Version)',
      'Unlimited SMS & WhatsApp Notifications',
      "Notifications are sent from USER'S DEVICE",
      'Regional Languages Supported',
      'Clinic Web and Patient Apps included',
      '1 Month FREE Trial Period'
    ],
    popular: true,
    razorpayButtonId: 'pl_Q1DhFG4bNjunj5'
  },
  {
    id: 'sms-plan',
    name: 'SMS Plan',
    icon: MessageSquare,
    description: 'Includes SMS credits for high-volume practices',
    price: {
      monthly: 400,
      annual: 368,
      currency: '₹',
      unit: 'per month',
      included: '500 SMS included'
    },
    features: [
      'Unlimited Appointments',
      'Unlimited e-Prescriptions',
      'Unlimited Documents (EMR / EHR)',
      'Unlimited Billing & Payment Receipts',
      'Unlimited Patients, Doctors & Consultants',
      'Unlimited Calendar Event & WhatsApp Notifications',
      'Secure Custom Web Portal Included',
      '500 SMS Notifications (English)',
      'SMS Notifications are sent from the app',
      'Regional Languages Supported (except SMS)',
      'Clinic Web and Patient Apps included',
      '1 Week Free Trial Period'
    ],
    popular: false,
    razorpayButtonId: 'pl_Q1DrVwVzFzSBTE'
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
          Choose budget-friendly clinic management software for appointments, EMR, billing, prescriptions and patient reminders. Start at just ₹125/month.
        </p>

        <div className="flex justify-center">
          <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
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
            Save 8%
          </Badge>
        </div>

      </motion.div>

      {/* Plans */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const price = isAnnual ? plan.price.annual : plan.price.monthly;

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
                    {price}
                  </div>
                  <div className="text-gray-600">{plan.price.unit}</div>
                  {plan.price.usdEquivalent && (
                    <div className="text-sm text-gray-500">
                      {plan.price.usdEquivalent}
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex space-x-3">
                      <Check className="w-5 h-5 text-teal-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Razorpay Button */}
                <RazorpayPaymentButton buttonId={plan.razorpayButtonId} />
              </Card>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
