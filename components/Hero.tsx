'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const stats = [
  { target: 500, label: 'Projects Completed' },
  { target: 150, label: 'Happy Clients' },
  { target: 15, label: 'Years Experience' },
  { target: 98, label: '% Success Rate' },
]

export default function Hero() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.target / 100
      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= stat.target) {
          current = stat.target
          clearInterval(timers[index])
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, 20)
    })

    return () => timers.forEach(clearInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-light/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop')",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Business with
            <br />
            <span className="text-white">Intelligent Salesforce Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90"
          >
            Empowering startups, SMEs, and enterprises with cutting-edge Salesforce development, AI-powered automation, and strategic CRM consulting that drives measurable growth and operational excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Start Your Digital Transformation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Play className="w-5 h-5" /> Explore Our Solutions
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  {counters[index]}{index === 3 ? '%' : '+'}
                </div>
                <div className="text-white/80 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
            }}
            animate={{
              y: [null, Math.random() * -100 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
