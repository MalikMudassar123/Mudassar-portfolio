import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Process from '@/components/Process'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main id="main">
        {/* Attention */}
        <Hero />
        {/* Authority */}
        <TrustedBy />
        {/* Interest */}
        <Services />
        {/* Trust + Authority */}
        <CaseStudies />
        {/* Confidence — reduce uncertainty */}
        <Process />
        {/* Authority — credibility */}
        <About />
        {/* Trust */}
        <Testimonials />
        {/* Objection handling */}
        <FAQ />
        {/* Conversion */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
