import { useEffect, useState } from 'react';
import Home from './components/Home.jsx';
import PrintPage from './components/PrintPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to) => {
    window.location.hash = to;
  };

  const renderPage = () => {
    switch (route) {
      case '/print':
        return <PrintPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <span className="text-2xl">🖨️</span>
            <span className="font-semibold tracking-tight">Automated Printer Shop</span>
          </button>
          <nav className="flex items-center gap-6 text-sm">
            <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => navigate('/print')} className="hover:text-blue-600 transition-colors">Start Printing</button>
            <button onClick={() => navigate('/about')} className="hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => navigate('/print')} className="ml-2 inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors">Get Started</button>
          </nav>
        </div>
      </header>

      <main>{renderPage()}</main>

      <Footer />
    </div>
  );
}

export default App;
