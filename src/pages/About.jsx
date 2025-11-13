import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-[#0b0b12] text-white">
      <Navbar />
      <section className="pt-36 pb-16 bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">We're Redefining Recruitment.</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Hyre was built to create partnerships that transform people and businesses.</p>
        </div>
      </section>

      <section className="bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <div className="mt-6 space-y-6">
              {[{year:'2018',text:'Founded with a mission to bring clarity and trust to recruitment.'},{year:'2019',text:'Built a rigorous, data-led approach to talent selection.'},{year:'2021',text:'Expanded internationally and deepened sector expertise.'},{year:'2024',text:'Partnered with industry leaders to deliver transformational teams.'}].map((m)=> (
                <div key={m.year} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-white/60 text-sm">{m.year}</div>
                  <div className="mt-1 font-medium">{m.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-white/80">To connect ambitious talent with visionary companies through integrity, precision, and long-term collaboration.</p>

            <h2 className="mt-10 text-2xl font-semibold">Values</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-4 text-white/80">
              {['Transparency & Authenticity','Collaboration','Diversity & Inclusion','Empathy & Accountability'].map(v => (
                <li key={v} className="rounded-2xl border border-white/10 bg-white/5 p-4">{v}</li>
              ))}
            </ul>

            <a href="/contact" className="inline-block mt-8 px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90">Meet Our Team</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
