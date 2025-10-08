import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-black"></div>
              <span className="text-base font-semibold tracking-wide">YourBrand</span>
            </div>
            <p className="text-sm text-gray-600">
              Property management solutions for owners and tenants. Built with Next.js.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link className="hover:text-black" href="/about">About</Link></li>
              <li><Link className="hover:text-black" href="/services">Services</Link></li>
              <li><Link className="hover:text-black" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link className="hover:text-black" href="/owners">For Owners</Link></li>
              <li><Link className="hover:text-black" href="/tenants">For Tenants</Link></li>
              <li><Link className="hover:text-black" href="/listings">Listings</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link className="hover:text-black" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-black" href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-black">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-black">LinkedIn</a>
            <a href="#" aria-label="Instagram" className="hover:text-black">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

