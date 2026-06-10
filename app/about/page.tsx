'use client'

import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '150+', label: 'Satisfied Clients' },
  { icon: Award, value: '500+', label: 'Projects Delivered' },
  { icon: Globe, value: '20+', label: 'Countries Served' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
]

const team = [
  {
    name: 'Certified Professionals',
    description: 'Our team consists of Salesforce certified experts including Administrators, Developers, Architects, and Consultants.',
  },
  {
    name: 'Industry Experience',
    description: 'With over 15 years of combined experience, we bring deep industry knowledge across various sectors.',
  },
  {
    name: 'Continuous Learning',
    description: 'We stay ahead of Salesforce releases and continuously update our skills with the latest technologies.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About CloudForce Solutions</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your trusted Salesforce partner committed to driving digital transformation and delivering exceptional business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Team Excellence</h2>
            <p className="text-gray-600 text-lg">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((item, index) => (
              <div key={index} className="bg-light p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-4">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-dark mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded with a vision to help businesses harness the full power of Salesforce, CloudForce Solutions has grown into a trusted partner for organizations worldwide. Our journey began with a simple belief: that technology should serve business goals, not complicate them.
              </p>
              <p>
                Over the years, we&apos;ve helped hundreds of companies transform their operations, enhance customer experiences, and drive measurable growth through intelligent Salesforce implementations. Our success is built on a foundation of technical excellence, strategic thinking, and an unwavering commitment to client success.
              </p>
              <p>
                Today, we continue to innovate and evolve, staying at the forefront of Salesforce technology while maintaining our core values of integrity, collaboration, and results-driven service. We don&apos;t just implement technology—we build lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-dark mb-12 text-center">Why Partner With Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Business-First Approach</h3>
                  <p className="text-gray-600">We focus on understanding your business goals before recommending technology solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Transparent Communication</h3>
                  <p className="text-gray-600">Clear, honest communication at every stage of your project journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Proven Methodology</h3>
                  <p className="text-gray-600">Time-tested processes ensure successful project delivery every time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Long-Term Partnership</h3>
                  <p className="text-gray-600">We&apos;re committed to your success beyond project completion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
