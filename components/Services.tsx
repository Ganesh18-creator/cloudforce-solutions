'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Code,
  GitBranch,
  Calculator,
  RefreshCw,
  Users,
  Brain,
  Workflow,
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Salesforce Development',
    description: 'Build powerful, scalable applications with custom Apex, Lightning Web Components (LWC), and Visualforce solutions tailored to your unique business needs.',
  },
  {
    icon: Brain,
    title: 'Salesforce Agentforce & AI Solutions',
    description: 'Harness the power of AI with Einstein, Agentforce, and intelligent automation that transforms customer engagement and drives predictive insights.',
  },
  {
    icon: RefreshCw,
    title: 'Salesforce Integrations',
    description: 'Seamlessly connect Salesforce with ERPs, payment gateways, WhatsApp, e-commerce platforms, and third-party systems for unified business operations.',
  },
  {
    icon: Shield,
    title: 'CRM Consulting',
    description: 'Strategic guidance for maximizing Salesforce ROI through business process optimization, solution architecture, and change management expertise.',
  },
  {
    icon: Workflow,
    title: 'Application Development',
    description: 'Custom applications built on Force.com, Heroku, and modern frameworks delivering innovative solutions beyond out-of-the-box functionality.',
  },
  {
    icon: Users,
    title: 'Managed Services & Support',
    description: 'Continuous excellence with 24/7 technical support, proactive monitoring, regular optimizations, and expert guidance for peak performance.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            Our Services
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">Comprehensive Salesforce Solutions Driving Business Transformation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
