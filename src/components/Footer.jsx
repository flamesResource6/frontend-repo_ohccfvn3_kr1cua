export default function Footer() {
  return (
    <footer className="bg-[#0b0b12] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#ff986c] to-[#5814f9]" />
              <span className="text-white font-semibold">Hyre</span>
            </div>
            <p className="text-white/70 text-sm max-w-xs">
              Connecting ambitious talent with visionary companies through integrity, precision, and long-term collaboration.
            </p>
          </div>
          <div>
            <h4 className="text-white/90 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/insights" className="hover:text-white">Insights</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/90 font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/clients" className="hover:text-white">Client Services</a></li>
              <li><a href="/candidates" className="hover:text-white">Candidate Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/90 font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>hello@hyre.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, London</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-white/50 text-xs">
          <p>© {new Date().getFullYear()} Hyre. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
