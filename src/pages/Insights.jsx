import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Insights() {
  return (
    <div className="bg-[#0b0b12] text-white">
      <Navbar />
      <section className="pt-36 pb-12 bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Actionable Insight. Measurable Growth.</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Guides, frameworks, and reports designed to give leaders and professionals an edge.</p>
        </div>
      </section>

      <section className="bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Download the Latest Report</h3>
            <p className="mt-2 text-white/70 text-sm">Executive hiring in 2025: trends, compensation, and frameworks.</p>
            <a href="#" className="inline-block mt-6 px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90">Download PDF</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Join the Newsletter</h3>
            <p className="mt-2 text-white/70 text-sm">Monthly analysis to help you hire and lead with clarity.</p>
            <a href="#" className="inline-block mt-6 px-5 py-3 rounded-lg font-medium bg-white/10 border border-white/20 hover:bg-white/15">Subscribe</a>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Stay Ahead of the Market</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">We distill credible data and practical guidance into tools you can use.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
