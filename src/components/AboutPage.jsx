import { Mail, User } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-slate-600 mb-8 max-w-3xl">
          We’re on a mission to make printing smart, fast, and eco-friendly. Our AI-powered system automates everything from file upload to print collection — helping students, offices, and institutions save time and effort.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((id) => (
            <div key={id} className="rounded-2xl border border-slate-200 p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                <User className="h-8 w-8 text-slate-500" />
              </div>
              <div className="font-semibold">Team Member {id}</div>
              <div className="text-slate-500 text-sm">Product & Ops</div>
            </div>
          ))}
        </div>

        <form className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={4} className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="How can we help?" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors">
              <Mail className="h-5 w-5" /> Send Message
            </button>
          </div>
        </form>

        <button onClick={() => onNavigate('/')} className="mt-8 text-sm text-slate-600 hover:text-blue-600">Back to Home</button>
      </div>
    </section>
  );
}
