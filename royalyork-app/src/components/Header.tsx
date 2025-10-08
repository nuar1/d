'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/listings', label: 'Listings' },
    { href: '/services', label: 'Services' },
    { href: '/owners', label: 'Owners' },
    { href: '/tenants', label: 'Tenants' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-black"></div>
          <span className="text-base font-semibold tracking-wide">YourBrand</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="block rounded p-2 hover:bg-black/5 md:hidden"
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 md:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-2 py-2 text-sm text-gray-800 hover:bg-black/5"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
              onClick={() => setIsMobileOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

