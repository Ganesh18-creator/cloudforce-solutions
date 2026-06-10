'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Enterprise Sales Automation',
    description: 'Implemented comprehensive Sales Cloud solution for Fortune 500 company, increasing sales productivity by 45%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
    tags: ['Sales Cloud', 'CPQ', 'Apex'],
  },
  {
    title: 'Custom LWC Platform',
    description: 'Built modern Lightning Web Components platform for healthcare provider, improving user experience by 60%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop',
    tags: ['LWC', 'Flows', 'Integration'],
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Deployed Einstein AI solution for retail client, delivering predictive insights and 35% revenue growth.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop',
    tags: ['Einstein AI', 'Analytics', 'Automation'],
  },
  {
    title: 'Complex API Integration',
    description: 'Integrated 15+ third-party systems via REST/SOAP APIs for manufacturing giant, streamlining operations.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop',
    tags: ['REST API', 'SOAP', 'Integration'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            Portfolio & Case Studies
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">Success Stories That Inspire</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-light text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
