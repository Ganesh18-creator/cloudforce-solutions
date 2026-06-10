'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Users, Lightbulb, Clock, DollarSign } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Certified Salesforce Experts',
    description: 'Multiple Salesforce certifications including Platform Developer I & II, Application Architect, and System Architect ensuring world-class implementation quality.',
  },
  {
    icon: Trophy,
    title: 'AI & Automation Specialists',
    description: 'Pioneers in implementing Salesforce Einstein AI, Agentforce, and intelligent automation solutions that reduce manual work by up to 70%.',
  },
  {
    icon: Users,
    title: 'Proven Track Record',
    description: 'With 98% client satisfaction rate and 500+ successfully delivered projects across 20+ countries, we turn business challenges into competitive advantages.',
  },
  {
    icon: Lightbulb,
    title: 'Industry Expertise',
    description: 'Deep domain knowledge across Financial Services, Healthcare, Manufacturing, Retail, and Technology enabling industry-specific solutions.',
  },
  {
    icon: Clock,
    title: 'Agile Methodology',
    description: 'Proven agile approach ensures rapid delivery, flexibility to adapt to changing requirements, and consistent stakeholder engagement.',
  },
  {
    icon: DollarSign,
    title: 'Measurable ROI',
    description: 'Average 287% ROI within first year through increased productivity, automated processes, and improved customer satisfaction.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">Your Success is Our Priority</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="text-center p-8 bg-light rounded-2xl hover:bg-white hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-dark mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
