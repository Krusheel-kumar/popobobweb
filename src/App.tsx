import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-warm-cream min-h-screen text-rich-black overflow-x-hidden font-sans">
      <Navigation />
      
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future utility routes can go here (e.g. /menu, /order, /privacy) */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
