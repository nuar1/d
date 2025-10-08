import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./components/ContactForm"), { ssr: false });

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">Property Management That Performs</h1>
            <p className="mt-6 text-neutral-600">Transparent pricing, vetted tenants, and responsive maintenance for peace of mind.</p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800 text-sm">Get a Free Rental Assessment</a>
              <a href="#services" className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-3 text-neutral-900 hover:bg-neutral-100 text-sm">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-semibold text-neutral-900">Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-neutral-200 p-6">
              <p className="font-medium text-neutral-900">Tenant Placement</p>
              <p className="mt-2 text-sm text-neutral-600">Marketing, showings, screening, and lease signing.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <p className="font-medium text-neutral-900">Full-Service Management</p>
              <p className="mt-2 text-sm text-neutral-600">Rent collection, inspections, maintenance, and reporting.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <p className="font-medium text-neutral-900">Maintenance</p>
              <p className="mt-2 text-sm text-neutral-600">24/7 work orders with trusted vendors.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-neutral-900">About Us</h2>
            <p className="mt-4 text-neutral-600">We combine data-driven pricing with local expertise to reduce vacancy and protect your investment.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-semibold text-neutral-900">What Clients Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="rounded-lg border border-neutral-200 p-6 text-sm text-neutral-700">“Professional, communicative, and thorough.”</blockquote>
            <blockquote className="rounded-lg border border-neutral-200 p-6 text-sm text-neutral-700">“Found great tenants fast and kept us informed.”</blockquote>
            <blockquote className="rounded-lg border border-neutral-200 p-6 text-sm text-neutral-700">“Maintenance handled quickly and cost-effectively.”</blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-neutral-900">Get In Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

// ContactForm is dynamically imported above
