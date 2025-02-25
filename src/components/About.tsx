import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <div>
        <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            About My College
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600">
                My College, established in 1999, is one of the pioneer institutions in the Maldives offering quality higher education. Our mission is to provide accessible, affordable, and quality education to students from all walks of life.
              </p>
              <p className="text-lg text-gray-600">
                We are committed to academic excellence and practical skill development, preparing our students for successful careers in their chosen fields.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600">2000+</h3>
                  <p className="text-gray-600">Graduates</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600">50+</h3>
                  <p className="text-gray-600">Programs</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600">100+</h3>
                  <p className="text-gray-600">Expert Faculty</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600">20+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="College Life"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About
