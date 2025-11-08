import { useState } from 'react';
import { ChevronRight, CheckCircle2, Shield, Leaf, Zap, Bot, CreditCard } from 'lucide-react';

function CarouselSlide({ title, description, image }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
        <p className="text-slate-600 text-lg">{description}</p>
      </div>
      <div className="relative">
        <img src={image} alt="slide" className="w-full rounded-xl shadow-xl" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-600/10 to-teal-400/10 pointer-events-none" />
      </div>
    </div>
  );
}

export default function Home({ onNavigate }) {
  const slides = [
    {
      title: 'Upload your file',
      description: 'From Web, WhatsApp, or Email in seconds.',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Choose your print settings',
      description: 'Color, size, and add-ons tailored to your needs.',
      image:
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Pay securely and collect instantly',
      description: 'Multiple payment options with instant confirmation.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'AI manages queue & predicts time',
      description: 'Smart scheduling optimizes wait times automatically.',
      image:
        'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Smart, Contactless, and AI-Powered Printing.
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl">
                Print anywhere, anytime — powered by automation and intelligence.
              </p>
              <div className="flex items-center gap-4">
                <button onClick={() => onNavigate('/print')} className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative h-72 sm:h-96">
              <div className="absolute -top-10 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-600/20 to-teal-400/20 rounded-full blur-3xl pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566f?q=80&w=1400&auto=format&fit=crop"
                alt="Printer"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <div className="flex gap-2">
              <button onClick={prev} className="h-9 w-9 rounded-full border border-slate-200 hover:bg-slate-50">‹</button>
              <button onClick={next} className="h-9 w-9 rounded-full border border-slate-200 hover:bg-slate-50">›</button>
            </div>
          </div>
          <div className="relative">
            <div className="transition-all duration-500">
              <CarouselSlide {...slides[index]} />
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-blue-600' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: 'Instant Upload', desc: 'Send files from web, WhatsApp, or email.' },
            { icon: Bot, title: 'AI Queue Scheduling', desc: 'Smart prioritization for minimal wait.' },
            { icon: CreditCard, title: 'Secure Payments', desc: 'Fast, encrypted checkout options.' },
            { icon: Leaf, title: 'Eco Mode Printing', desc: 'Save ink and paper automatically.' },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini How It Works Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
          <ol className="grid sm:grid-cols-3 gap-6 items-start">
            {[
              { num: '1️⃣', title: 'Upload', desc: 'PDF/DOC from any device' },
              { num: '2️⃣', title: 'Choose Settings', desc: 'Color, size, add-ons' },
              { num: '3️⃣', title: 'Print Instantly', desc: 'Auto-queued & ready' },
            ].map((s, i) => (
              <li key={i} className="text-center">
                <div className="text-3xl mb-2">{s.num}</div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-3">Experience Smart Printing Today.</h3>
          <p className="text-slate-600 mb-8">Calm, professional, and effortless from start to finish.</p>
          <button onClick={() => onNavigate('/print')} className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors">
            Start Printing
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
