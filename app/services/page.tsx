'use client'

import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const serviceDetails = [
  {
    title: 'Salesforce Consulting',
    features: [
      'Business process analysis and optimization',
      'Salesforce platform selection and licensing guidance',
      'Solution architecture and design',
      'Change management and adoption strategies',
      'ROI analysis and success metrics',
    ],
  },
  {
    title: 'Salesforce Implementation',
    features: [
      'End-to-end Salesforce deployment',
      'Data migration and integration',
      'Custom configuration and setup',
      'User training and documentation',
      'Go-live support and hypercare',
    ],
  },
  {
    title: 'Custom Development',
    features: [
      'Apex triggers and classes development',
      'Lightning Web Components (LWC)',
      'Visualforce pages and components',
      'Custom REST/SOAP APIs',
      'Third-party integrations',
    ],
  },
  {
    title: 'System Integration',
    features: [
      'ERP system integration (SAP, Oracle, etc.)',
      'Marketing automation platforms',
      'Payment gateway integration',
      'WhatsApp Business API integration',
      'Custom middleware development',
    ],
  },
  {
    title: 'Managed Services & Support',
    features: [
      '24/7 technical support',
      'Regular system health checks',
      'Ongoing enhancements and optimizations',
      'User management and training',
      'Release management and updates',
    ],
  },
  {
    title: 'Digital Transformation',
    features: [
      'Business process digitization',
      'Customer experience transformation',
      'Sales and marketing automation',
      'Analytics and reporting dashboards',
      'Mobile-first solutions',
    ],
  },
]

const industries = [
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail & E-commerce',
  'Technology',
  'Non-Profit',
  'Education',
  'Real Estate',
]

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Salesforce Services</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive Salesforce solutions designed to accelerate your digital transformation and drive measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services />

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Service Details</h2>
            <p className="text-gray-600 text-lg">What&apos;s included in each service offering</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceDetails.map((service, index) => (
              <div key={index} className="bg-light p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark mb-8">Industries We Serve</h2>
            <p className="text-gray-600 text-lg mb-12">
              We have deep expertise serving clients across diverse industries with tailored Salesforce solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <p className="font-semibold text-gray-800">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-dark mb-12 text-center">Our Proven Approach</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We start by understanding your business objectives, current challenges, and future vision to create a comprehensive roadmap.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Design & Architecture</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our architects design scalable, secure solutions aligned with Salesforce best practices and your specific requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Development & Testing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our expert developers build and rigorously test your solution to ensure quality and performance.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Deployment & Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We manage smooth deployment and provide ongoing support to ensure continued success and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our Salesforce services can help transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
