import { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'General', message: '' })

  return (
    <div className="bg-[#0b0b12] text-white">
      <Navbar />
      <section className="pt-36 pb-12 bg-[#0b0b12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Let's Talk About What's Next.</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Whether you’re hiring or exploring your next role, we’re here to help.</p>
        </div>
      </section>

      <section className="bg-[#0f0f16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm text-white/70">Inquiry Type</label>
              <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white">
                <option>General</option>
                <option>Hiring</option>
                <option>Opportunities</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="How can we help?" />
            </div>
            <button className="px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-[#ff986c] to-[#5814f9] hover:opacity-90">Submit Inquiry</button>
          </form>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Office</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>hello@hyre.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, London</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
