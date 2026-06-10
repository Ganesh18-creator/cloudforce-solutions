'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Cloud className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-primary">CloudForce Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="gradient-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 font-medium hover:text-primary transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="gradient-primary text-white px-6 py-2.5 rounded-lg font-semibold inline-block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
