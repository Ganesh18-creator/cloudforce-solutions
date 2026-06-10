import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portfolio & Case Studies | CloudForce Solutions',
  description: 'View our successful Salesforce projects and client case studies showcasing our expertise.',
}

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
    </main>
  )
}
