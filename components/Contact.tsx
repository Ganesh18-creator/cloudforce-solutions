'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Github, Send } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setNotification({ type: 'error', message: 'Please fill in all required fields' })
      setTimeout(() => setNotification(null), 5000)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setNotification({ type: 'error', message: 'Please enter a valid email address' })
      setTimeout(() => setNotification(null), 5000)
      return
    }

    // Success
    setNotification({
      type: 'success',
      message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
    })
    setTimeout(() => setNotification(null), 5000)

    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className={`fixed top-24 right-6 z-50 p-6 rounded-xl shadow-2xl max-w-md ${
            notification.type === 'success'
              ? 'bg-white border-l-4 border-green-500'
              : 'bg-white border-l-4 border-red-500'
          }`}
        >
          <div className="flex items-center gap-3">
            {notification.type === 'success' ? (
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
            ) : (
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">!</span>
              </div>
            )}
            <p className="text-gray-900">{notification.message}</p>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 gradient-primary rounded-full" />
          </h2>
          <p className="text-gray-600 text-lg mt-6">Let&apos;s Transform Your Business Together</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-dark mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Email</h4>
                  <p className="text-gray-600">info@thebodaciousbosses.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9942407870</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Location</h4>
                  <p className="text-gray-600">Bangalore | Coimbatore</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-dark mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Github, href: '#' },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="w-12 h-12 bg-light rounded-full flex items-center justify-center text-primary hover:gradient-primary hover:text-white transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-light p-8 md:p-12 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-light px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Name *
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-light px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Email *
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 -top-2.5 bg-light px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a Service *</option>
                  <option value="administration">Salesforce Administration</option>
                  <option value="development">Salesforce Development</option>
                  <option value="apex">Apex Development</option>
                  <option value="lwc">Lightning Web Components</option>
                  <option value="cpq">Salesforce CPQ</option>
                  <option value="integration">API Integration</option>
                  <option value="ai">Salesforce AI Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors peer resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-light px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Message *
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-primary text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
