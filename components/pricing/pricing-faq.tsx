'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

import { pricingFaqs } from '@/lib/pricing-faqs';

export function PricingFAQ() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently asked questions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about our pricing and plans
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="p-8 rounded-3xl shadow-lg bg-white border-0">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-royal-50 data-[state=open]:border-royal-100"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-royal-600 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </motion.div>

      {/* Still have questions CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="p-8 bg-gradient-to-r from-teal-50 to-blue-50 border-teal-100 rounded-3xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you choose the right plan for your clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="inline-flex items-center justify-center h-12 px-6 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-medium transition-colors"
            >
              <a href="mailto:appointikteam@gmail.com">
                Email Support
              </a>
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/919663144725?text=Hi%20I%27m%20interested%20in%20Appointik', '_blank')}
              className="inline-flex items-center justify-center h-12 px-6 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
