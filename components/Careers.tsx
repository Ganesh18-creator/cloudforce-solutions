'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const jobs = [
  { title: 'Senior Salesforce Developer', location: 'Remote', type: 'Full-time' },
  { title: 'Salesforce Administrator', location: 'Hybrid', type: 'Full-time' },
  { title: 'Salesforce Architect', location: 'Remote', type: 'Full-time' },
  { title: 'LWC Specialist', location: 'On-site', type: 'Contract' },
]

export default function Careers() {
  return (
    <section id="careers" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            Join Our Team
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">Build Your Career with Us</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-dark mb-4">Why Work With Us?</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join a dynamic team of Salesforce professionals passionate about innovation and excellence. We offer competitive compensation, continuous learning opportunities, and a collaborative work environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">Current Openings</h3>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">{job.title}</h4>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-primary font-semibold border-2 border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
