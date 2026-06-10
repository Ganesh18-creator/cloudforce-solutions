import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | CloudForce Solutions',
  description: 'Get in touch with our team. Contact us for Salesforce consulting, development, and support services.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
