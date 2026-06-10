import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Client Testimonials | CloudForce Solutions',
  description: 'Read what our clients say about working with CloudForce Solutions and our Salesforce expertise.',
}

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
