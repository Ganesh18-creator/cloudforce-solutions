import Navbar from '@/components/Navbar'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Careers | CloudForce Solutions',
  description: 'Join our team of Salesforce professionals. View current job openings and career opportunities.',
}

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Careers />
      </div>
      <Footer />
    </main>
  )
}
