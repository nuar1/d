"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-3">
						<Link href="/" className="text-xl font-semibold tracking-tight">
							YourBrand
						</Link>
					</div>
					<nav className="hidden md:flex items-center gap-6 text-sm">
						<Link href="/" className="hover:text-neutral-900 text-neutral-600">Home</Link>
						<Link href="#services" className="hover:text-neutral-900 text-neutral-600">Services</Link>
						<Link href="#about" className="hover:text-neutral-900 text-neutral-600">About</Link>
						<Link href="#testimonials" className="hover:text-neutral-900 text-neutral-600">Testimonials</Link>
						<Link href="#contact" className="inline-flex items-center rounded-md bg-neutral-900 px-3 py-2 text-white hover:bg-neutral-800">Contact</Link>
					</nav>
					<button aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile-nav" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100" onClick={() => setIsOpen(!isOpen)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
							<path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
						</svg>
					</button>
				</div>
			</div>
			{isOpen && (
				<div id="mobile-nav" className="md:hidden border-t border-neutral-200 bg-white">
					<div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 text-sm">
						<Link href="/" className="py-1">Home</Link>
						<Link href="#services" className="py-1">Services</Link>
						<Link href="#about" className="py-1">About</Link>
						<Link href="#testimonials" className="py-1">Testimonials</Link>
						<Link href="#contact" className="py-1">Contact</Link>
					</div>
				</div>
			)}
		</header>
	);
}

