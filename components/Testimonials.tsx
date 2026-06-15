'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'The Salesforce implementation completely transformed our sales operations. The Einstein AI integration increased our lead conversion rate by 43%, and the custom CPQ solution reduced our quote generation time from days to minutes. The team&apos;s expertise and dedication to our success have been exceptional.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Technology Head',
    image: 'https://i.pravatar.cc/150?img=47',
    text: 'Working with this team was a game-changer for our business. They developed a complex multi-cloud integration connecting Salesforce with our ERP, e-commerce platform, and customer support systems. The seamless data flow has given us a true 360-degree customer view. Their technical expertise is unmatched.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Operations Director',
    image: 'https://i.pravatar.cc/150?img=33',
    text: 'The Agentforce implementation has revolutionized our customer service. Our AI-powered chatbot handles 60% of customer inquiries automatically, and response times have decreased by 70%. The predictive analytics help us anticipate customer needs before they arise. Exceptional work!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            Client Testimonials
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">What Our Clients Say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-light p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
