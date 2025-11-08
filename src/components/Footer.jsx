import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© 2025 Automated Printer Shop</p>
        <div className="flex items-center gap-4 text-slate-500">
          <a href="#" aria-label="Twitter" className="hover:text-blue-600"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-600"><Facebook className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-600"><Instagram className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
