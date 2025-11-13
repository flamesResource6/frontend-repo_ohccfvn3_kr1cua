import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, ctas }) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0b0b12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0b0b12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff986c] to-[#5814f9]" />
            Trusted talent and client services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {ctas?.map((cta) => (
              <a key={cta.label} href={cta.href} className={`px-5 py-3 rounded-lg font-medium transition ${cta.variant === 'outline' ? 'bg-white/10 hover:bg-white/15 border border-white/20' : 'bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90'}`}>
                {cta.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-50%,rgba(88,20,249,0.25),transparent)]" />
    </section>
  )
}
