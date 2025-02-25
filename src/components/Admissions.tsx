import React from 'react'
import ApplyNowBtn from './ApplyNowBtn'
import { motion } from 'framer-motion';
import {
    ChevronRight,
  } from 'lucide-react';

function Admissions() {
  return (
    <div>
        <section id="admissions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Admissions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Submit Application</h4>
                    <p className="text-gray-600">Complete the online application form with all required documents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Document Verification</h4>
                    <p className="text-gray-600">Submit certified copies of academic certificates and identification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Interview</h4>
                    <p className="text-gray-600">Attend an interview with the program coordinator</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Enrollment</h4>
                    <p className="text-gray-600">Complete enrollment and begin your academic journey</p>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors mt-8"
              >
                <ApplyNowBtn />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Requirements</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Academic Requirements</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>High school completion certificate</li>
                    <li>Minimum GPA of 2.0 or equivalent</li>
                    <li>English language proficiency</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Required Documents</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Completed application form</li>
                    <li>Academic transcripts</li>
                    <li>Valid ID card/Passport copy</li>
                    <li>Passport size photographs</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Additional Requirements</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Statement of purpose</li>
                    <li>Two letters of recommendation</li>
                    <li>Portfolio (for specific programs)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Admissions
