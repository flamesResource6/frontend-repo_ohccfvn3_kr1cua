import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Clients() {
  return (
    <div className="bg-[#0b0b12] text-white">
      <Navbar />
      <section className="pt-36 pb-12 bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Recruitment That Drives Performance.</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Partner with Hyre to secure the right people — faster, smarter, and with lasting impact.</p>
        </div>
      </section>

      <section className="bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">
          {[
            {title:'Discovery',desc:'Define success, outcomes, and organisational context.'},
            {title:'Shortlist',desc:'Rigorous selection using structured evaluation and market mapping.'},
            {title:'Interview',desc:'Orchestrated process designed for clarity and speed.'},
            {title:'Hire',desc:'Offer management, references, and close.'},
            {title:'Growth',desc:'Post-hire support to ensure long-term success.'},
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold">Industry Sectors</h2>
          <p className="mt-2 text-white/70">Product, Engineering, Cloud, Data, Security, Growth, People, DevOps, Emerging Tech, Infrastructure</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {["Hyre delivered a mission-critical VP Engineering in 28 days.","Transparent, data-led, and precise. A genuine partner.","World-class experience from strategy to close."].map((t,i)=> (
              <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">“{t}”</blockquote>
            ))}
          </div>

          <a href="/contact" className="inline-block mt-10 px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90">Request a Consultation</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
