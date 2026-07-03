/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import StoreInfo from './components/StoreInfo';
import { themes } from './themes';
import { ThemeContext } from './ThemeContext';

export default function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const widthScale = (window.innerWidth - 32) / 1747;
      const heightScale = (window.innerHeight - 32) / 1094;
      setScale(Math.min(1, Math.min(widthScale, heightScale)));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const theme = themes[themeIndex];

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    container.scrollTo({ top: 0, behavior: 'instant' });
    
    let isActive = true;
    let currentIdx = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const sections = Array.from(container.querySelectorAll('[data-section]')) as HTMLElement[];
    
    const nextScroll = () => {
      if (!isActive) return;
      currentIdx++;
      if (currentIdx >= sections.length) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
        currentIdx = 0;
        timeoutId = setTimeout(nextScroll, 2000);
      } else {
        const target = sections[currentIdx];
        container.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        // Assume scrolling takes ~600ms, pause 1s after it arrives
        timeoutId = setTimeout(nextScroll, 1600);
      }
    };

    timeoutId = setTimeout(nextScroll, 1600);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [themeIndex]);

  return (
    <div className={`h-screen w-screen overflow-hidden flex items-center justify-center transition-colors duration-1000 ease-in-out ${theme.wrapperBg}`}>
      <div 
        className="flex-shrink-0 flex flex-col"
        style={{ 
          width: '1747px', 
          height: '1094px', 
          transform: `scale(${scale})`, 
          transformOrigin: 'center center' 
        }}
      >
        {/* Title Banner (96px) */}
        <div className="h-[96px] flex items-center justify-between px-8">
           <div className="w-32"></div>
           <h1 className="text-4xl text-gray-800" style={{ fontFamily: "'Dancing Script', cursive", leadingTrim: 'both', textEdge: 'cap' }}>
             Type "Code" For Full Guide
           </h1>
           <div className="w-32 flex items-center justify-end gap-4">
             <button onClick={toggleFullscreen} className="w-12 h-12 bg-white/50 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm text-gray-800">
               {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
             </button>
             <button 
               onClick={() => setThemeIndex((prev) => (prev + 1) % themes.length)}
               className="w-12 h-12 bg-white/50 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm font-bold text-lg text-gray-800"
             >
               {themeIndex + 1}
             </button>
           </div>
        </div>

        {/* Artboard (942px) */}
        <div 
          ref={scrollRef}
          className="w-full h-[942px] bg-white rounded-2xl overflow-y-auto overflow-x-hidden no-scrollbar relative"
          style={{
            boxShadow: '0 40px 90px -20px rgba(0,0,0,.45), 0 20px 40px -15px rgba(0,0,0,.30), 0 0 0 1px rgba(0,0,0,.08), inset 0 1px 2px rgba(255,255,255,.25)'
          }}
        >
           <ThemeContext.Provider value={{ theme }}>
             <div data-section className="relative">
               <Navbar />
               <Hero />
             </div>
             <div data-section>
               <Categories />
             </div>
             <div data-section>
               <ProductGrid />
             </div>
             <div data-section>
               <StoreInfo />
             </div>
             <footer data-section className="bg-gray-900 text-white py-8 text-center text-sm text-gray-400">
               <p>© {new Date().getFullYear()} {theme.storeInfo.name} ({theme.storeInfo.nameHindi}). All rights reserved.</p>
               <p className="mt-1">{theme.storeInfo.address}</p>
             </footer>
           </ThemeContext.Provider>
        </div>

        {/* Footer (56px) */}
        <div className="h-[56px] flex items-center justify-center">
           <a 
             href="https://linkedin.com/in/letssachin" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300"
           >
             <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </div>
             <span className="uppercase tracking-widest font-bold text-gray-800 modern-sans-serif text-sm">@letssachin</span>
           </a>
        </div>
      </div>
    </div>
  );
}

