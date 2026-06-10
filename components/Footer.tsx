'use client'

import Link from 'next/link'
import { Cloud } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
  ],
  Services: [
    { label: 'Salesforce Consulting', href: '/services' },
    { label: 'Custom Development', href: '/services' },
    { label: 'System Integration', href: '/services' },
    { label: 'Digital Transformation', href: '/services' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Cloud className="w-8 h-8 text-primary-light group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold">CloudForce Solutions</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading Salesforce consulting partner delivering innovative, scalable, and high-quality solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks['Quick Links'].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light hover:pl-2 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.Services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light hover:pl-2 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-light">✉</span>
                <span>contact@cloudforcesolutions.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-light">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {currentYear} CloudForce Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
