'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const values = [
  { label: 'Innovation First', description: 'Embracing cutting-edge technologies including AI, automation, and intelligent workflows' },
  { label: 'Client Success', description: 'Your growth and success metrics are our primary KPIs' },
  { label: 'Technical Excellence', description: 'Maintaining the highest standards of code quality, security, and scalability' },
  { label: 'Transparent Partnership', description: 'Building trust through clear communication and honest collaboration' },
  { label: 'Continuous Evolution', description: 'Staying ahead of Salesforce releases and emerging industry trends' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            About Us
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">Your Trusted Salesforce Partner</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To empower businesses worldwide with transformative Salesforce solutions that drive innovation, enhance customer experiences, and deliver sustainable competitive advantages in the digital age.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To be the world&apos;s most trusted Salesforce innovation partner, recognized for delivering exceptional value, pioneering AI-powered solutions, and creating lasting impact for our clients.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">{value.label}:</strong>
                    <span className="text-gray-600"> {value.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-primary rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
