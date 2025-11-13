import { motion } from 'framer-motion'
import { Briefcase, Users, Cpu, Database, Cloud, BarChart3, Cog, Shield, Rocket, Workflow } from 'lucide-react'

export function Overview() {
  return (
    <section className="bg-[#0f0f16] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Dual focus. Singular standard.</h2>
          <p className="mt-4 text-white/70">
            Hyre partners with enterprise leaders and top-tier talent. We operate with transparency and precision to ensure every hire drives performance and long-term success.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[{title:'For Clients',desc:'Access strategic hiring that blends market intelligence with rigorous selection.'},{title:'For Candidates',desc:'Gain representation that accelerates your career with roles that matter.'}].map((c)=> (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectorsGrid() {
  const sectors = [
    { name: 'Product', icon: Briefcase },
    { name: 'Engineering', icon: Cog },
    { name: 'Cloud', icon: Cloud },
    { name: 'Data & AI', icon: Database },
    { name: 'Security', icon: Shield },
    { name: 'Growth', icon: BarChart3 },
    { name: 'People', icon: Users },
    { name: 'DevOps', icon: Workflow },
    { name: 'Emerging Tech', icon: Rocket },
    { name: 'Infra', icon: Cpu },
  ]

  return (
    <section className="bg-[#0b0b12] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Sectors we specialise in</h2>
        <p className="mt-3 text-white/70 max-w-2xl">We focus on mission-critical disciplines that power modern technology organisations.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {sectors.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <Icon className="text-white/80 group-hover:text-white" />
              <div className="mt-3 font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SocialProof() {
  const logos = ['Apex Labs', 'Northwind', 'Acme Systems', 'Vertex AI', 'IonCloud']
  return (
    <section className="bg-[#0f0f16] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-white/60 text-xs uppercase tracking-widest">Trusted by teams building the future</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((l) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/70">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection({ title = "Let's Build What's Next", subtitle = 'Partner with Hyre for performance-driven hiring and career moves that compound.' }) {
  return (
    <section className="relative bg-[#0b0b12] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(255,152,108,0.25),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <a href="/contact" className="px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90">Start a conversation</a>
          <a href="/clients" className="px-5 py-3 rounded-lg font-medium bg-white/10 border border-white/20 hover:bg-white/15">Learn more</a>
        </div>
      </div>
    </section>
  )
}
