import { Heart, ShoppingCart, Crown } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();
  
  return (
    <nav className="absolute top-0 left-0 w-full z-10 px-8 py-8 text-white flex justify-between items-center max-w-[1600px] mx-auto left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-3">
        <div className="bg-white text-brand p-1.5 rounded-full shadow-md">
          <Crown className="w-5 h-5" />
        </div>
        <span className="text-xl font-black tracking-wide uppercase transition-all duration-1000">{theme.storeInfo.name}</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#" className="relative font-semibold after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-white">Home</a>
        <a href="#shop" className="hover:text-white/80 transition">Shop</a>
        <a href="#deals" className="hover:text-white/80 transition">Deals</a>
        <a href="#about" className="hover:text-white/80 transition">About Us</a>
        <a href="#contact" className="hover:text-white/80 transition">Contact</a>
      </div>

      <div className="flex items-center gap-5">
        <button className="hover:scale-110 transition relative">
          <Heart className="w-5 h-5" />
        </button>
        <button className="hover:scale-110 transition relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-1.5 -right-2 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    </nav>
  );
}
