'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, MonitorSmartphone, Smartphone, User } from 'lucide-react';

export function DownloadApps() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Complete Clinic Software Package
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Clinic Web App, Android app, iPhone-friendly installable web app, Patient App and custom booking portals for every clinic
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Appointik – Clinic Web App */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-royal-50 to-blue-50 border-royal-100 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-royal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MonitorSmartphone className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Clinic Web App
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Run appointments, EMR, billing, prescriptions, patient records and reports from the browser. Install the web app on iPhone for quick iOS access.
            </p>

            <a
              href="https://clinic.appointik.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-5 rounded-2xl bg-royal-500 text-white font-semibold hover:bg-royal-600 transition-colors"
            >
              Open Web App
            </a>
          </Card>
        </motion.div>

        {/* Appointik – Clinic Android App */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-royal-50 to-blue-50 border-royal-100 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-royal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Clinic Android App
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Manage appointments, patient records, prescriptions, billing and multilingual reminders from the Appointik Clinic App with 10,000+ downloads.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 mx-auto"
              />
            </a>
          </Card>
        </motion.div>

        {/* Appointik Patient App */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-royal-50 to-blue-50 border-royal-100 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-royal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Appointik Patient App
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Give patients a simple app to book appointments, view prescriptions, access reports and stay connected with their clinic.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik.patient"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 mx-auto"
              />
            </a>
          </Card>
        </motion.div>

        {/* Custom Booking Portal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-royal-50 to-blue-50 border-royal-100 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-royal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Booking Portal
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Each clinic can share a branded appointment booking web portal where patients book available slots online.
            </p>

            <a
              href="https://appointik.in/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-5 rounded-2xl bg-royal-500 text-white font-semibold hover:bg-royal-600 transition-colors"
            >
              View Portal
            </a>
          </Card>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-royal-600 mb-1">4.7★</div>
            <div className="text-sm text-gray-600">Google Play Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-teal-600 mb-1">10,000+</div>
            <div className="text-sm text-gray-600">Clinic App Downloads</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600 mb-1">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
