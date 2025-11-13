import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Candidates() {
  return (
    <div className="bg-[#0b0b12] text-white">
      <Navbar />
      <section className="pt-36 pb-12 bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Empowering Talent to Shape the Future.</h1>
          <p className="mt-4 text-white/80 max-w-2xl">We help professionals find meaningful roles that elevate their careers.</p>
        </div>
      </section>

      <section className="bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">
          {[
            {title:'Career Management',desc:'We help you navigate opportunities with clarity and intent.'},
            {title:'Preparation',desc:'Structured coaching across interviews, casework, and negotiation.'},
            {title:'Advocacy',desc:'Representation that respects your goals and time.'},
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
          <h2 className="text-2xl font-semibold">Sectors We Hire For</h2>
          <p className="mt-2 text-white/70">Product, Engineering, Cloud, Data, Security, Growth, People, DevOps, Emerging Tech, Infrastructure</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {["Hyre opened doors I didn’t know existed.","The preparation and transparency were next-level.","I felt represented, not just placed."].map((t,i)=> (
              <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">“{t}”</blockquote>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a href="/contact" className="px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90">Submit Your CV</a>
            <a href="#" className="px-5 py-3 rounded-lg font-medium bg-white/10 border border-white/20 hover:bg-white/15">Explore Roles</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
