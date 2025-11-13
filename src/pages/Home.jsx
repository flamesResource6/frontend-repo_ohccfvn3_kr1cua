import Navbar from '../Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Overview, SectorsGrid, SocialProof, CTASection } from '../components/Sections'

export default function Home() {
  return (
    <div className="bg-[#0b0b12]">
      <Navbar />
      <Hero
        title="Connecting People. Powering Progress."
        subtitle="We match high-performing talent with industry-defining companies shaping the future of technology."
        ctas={[
          { label: 'Find Talent', href: '/clients' },
          { label: 'Find Opportunities', href: '/candidates', variant: 'outline' },
        ]}
      />
      <Overview />
      <SectorsGrid />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  )
}
