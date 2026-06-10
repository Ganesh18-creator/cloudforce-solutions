import Navbar from '@/components/Navbar'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Why Choose Us | CloudForce Solutions',
  description: 'Discover why clients choose CloudForce Solutions for their Salesforce consulting and development needs.',
}

export default function WhyUsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <WhyUs />
      </div>
      <Footer />
    </main>
  )
}
