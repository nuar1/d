export default function Footer() {
	return (
		<footer className="border-t border-neutral-200 bg-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-neutral-600">
					<div>
						<p className="text-neutral-900 font-semibold">YourBrand</p>
						<p className="mt-3">Quality property management solutions.</p>
					</div>
					<div>
						<p className="text-neutral-900 font-semibold">Company</p>
						<ul className="mt-3 space-y-2">
							<li><a href="#about" className="hover:text-neutral-900">About</a></li>
							<li><a href="#services" className="hover:text-neutral-900">Services</a></li>
							<li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
						</ul>
					</div>
					<div>
						<p className="text-neutral-900 font-semibold">Contact</p>
						<ul className="mt-3 space-y-2">
							<li>Email: info@example.com</li>
							<li>Phone: (000) 000-0000</li>
						</ul>
					</div>
				</div>
				<p className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
			</div>
		</footer>
	);
}

