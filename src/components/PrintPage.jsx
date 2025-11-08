import { useMemo, useState } from 'react';
import { Upload, Settings2, CreditCard, Timer, Printer, QrCode } from 'lucide-react';

export default function PrintPage({ onNavigate }) {
  const [file, setFile] = useState(null);
  const [color, setColor] = useState('color');
  const [size, setSize] = useState('A4');
  const [copies, setCopies] = useState(1);
  const [binding, setBinding] = useState(false);
  const [lamination, setLamination] = useState(false);

  const pricePerPage = useMemo(() => (color === 'color' ? 10 : 5), [color]);
  const addOnCost = useMemo(() => (binding ? 20 : 0) + (lamination ? 15 : 0), [binding, lamination]);
  const totalCost = useMemo(() => pricePerPage * copies + addOnCost, [pricePerPage, copies, addOnCost]);

  const estimatedTime = useMemo(() => {
    const base = 2; // minutes
    const perCopy = color === 'color' ? 1 : 0.7;
    const addOn = (binding ? 3 : 0) + (lamination ? 2 : 0);
    return Math.ceil(base + copies * perCopy + addOn);
  }, [color, copies, binding, lamination]);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <Upload className="h-5 w-5" />
              </div>
              <h2 className="font-semibold">Upload File</h2>
            </div>
            <label className="block">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
            <p className="text-slate-500 text-xs mt-2">Supports PDF and DOC/DOCX. Max 25MB.</p>
            <div className="mt-3 text-sm text-slate-700">{file ? `Selected: ${file.name}` : 'No file selected yet.'}</div>
            <div className="mt-4 flex gap-3 flex-wrap">
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 hover:bg-slate-50">
                <QrCode className="h-4 w-4" /> Scan QR to Print
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 hover:bg-slate-50">
                🤖 Use WhatsApp Bot
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <Settings2 className="h-5 w-5" />
              </div>
              <h2 className="font-semibold">Choose Settings</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Color Mode</label>
                <div className="flex gap-3">
                  {['color', 'bw'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setColor(v)}
                      className={`rounded-full px-4 py-2 border ${color === v ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 hover:bg-slate-50'}`}
                    >
                      {v === 'color' ? 'Color' : 'Black & White'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Paper Size</label>
                <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2">
                  {['A4', 'A3', 'Letter'].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Number of Copies</label>
                <input type="number" min={1} value={copies} onChange={(e) => setCopies(Math.max(1, Number(e.target.value)))} className="w-full rounded-xl border border-slate-200 px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Add-ons</label>
                <div className="flex flex-col gap-2 text-sm">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={binding} onChange={(e) => setBinding(e.target.checked)} />
                    Binding (+₹20)
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={lamination} onChange={(e) => setLamination(e.target.checked)} />
                    Lamination (+₹15)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <Timer className="h-5 w-5" />
              </div>
              <h2 className="font-semibold">AI Prediction</h2>
            </div>
            <p className="text-slate-600">Estimated Time</p>
            <div className="text-3xl font-semibold mt-1">{estimatedTime} min</div>
            <p className="text-slate-500 text-sm mt-2">Queue-aware estimate auto-adjusts as you change options.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <CreditCard className="h-5 w-5" />
              </div>
              <h2 className="font-semibold">Checkout</h2>
            </div>
            <div className="flex items-center justify-between text-sm"> <span>Price per page</span> <span>₹{pricePerPage}</span> </div>
            <div className="flex items-center justify-between text-sm mt-1"> <span>Copies</span> <span>{copies}</span> </div>
            <div className="flex items-center justify-between text-sm mt-1"> <span>Add-ons</span> <span>₹{addOnCost}</span> </div>
            <div className="border-t border-slate-200 my-4" />
            <div className="flex items-center justify-between text-lg font-semibold"> <span>Total</span> <span>₹{totalCost}</span> </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors">
              <Printer className="h-5 w-5" /> Print Now
            </button>
          </div>

          <button onClick={() => onNavigate('/')} className="block w-full text-center text-sm text-slate-600 hover:text-blue-600">Back to Home</button>
        </aside>
      </div>
    </section>
  );
}
