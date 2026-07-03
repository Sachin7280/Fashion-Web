import { ChevronDown, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const heroBackgrounds = [
  "https://i.pinimg.com/1200x/87/ab/b0/87abb025d5d8c9989459066a619279b0.jpg",
  "https://i.pinimg.com/736x/8e/85/d4/8e85d481b92eafe7dfe5de0bce1695ee.jpg",
  "https://i.pinimg.com/736x/a0/85/a6/a085a6c46359fe8b9f2c1daee14c7431.jpg",
  "https://i.pinimg.com/736x/07/4c/0a/074c0a0fae877bda7a8b10e8ad73721f.jpg"
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-b-[3rem] text-white pt-28 pb-16 px-6 relative overflow-hidden bg-gray-900">
      {/* Dynamic Background Slider */}
      {heroBackgrounds.map((bg, index) => (
        <div 
          key={bg} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={bg} alt="Background" className="w-full h-full object-cover" />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/40"></div>
        </div>
      ))}
      
      {/* Decorative large circle background */}
      <div className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 max-w-3xl">
          <p className="font-medium tracking-wider text-white/90 transition-all duration-1000">
            {theme.storeInfo.offer}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight transition-all duration-1000">
            {theme.storeInfo.heroTitleLine1}<br/>
            {theme.storeInfo.heroTitleLine2}
          </h1>
          <p className="text-lg md:text-xl text-white/80 pb-4 transition-all duration-1000">
            {theme.storeInfo.heroDesc}
          </p>
          
          {/* Action Bar */}
          <div className="bg-white/20 backdrop-blur-md rounded-full p-2 flex items-center max-w-lg border border-white/30 shadow-lg">
            <div className="flex-1 flex items-center justify-between px-6 text-sm md:text-base font-medium">
              <span>Select Category</span>
              <ChevronDown className="w-5 h-5 opacity-70" />
            </div>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-sm md:text-base shadow-sm hover:bg-gray-50 transition">
              Shop Now
            </button>
          </div>

          {/* Social Proof Badge */}
          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?img=1" alt="Customer" className="w-12 h-12 rounded-full border-2 border-brand object-cover" />
              <img src="https://i.pravatar.cc/150?img=2" alt="Customer" className="w-12 h-12 rounded-full border-2 border-brand object-cover" />
              <img src="https://i.pravatar.cc/150?img=3" alt="Customer" className="w-12 h-12 rounded-full border-2 border-brand object-cover" />
            </div>
            <div>
              <p className="text-sm md:text-base font-medium">Our Happy Customers</p>
              <div className="flex items-center gap-1 text-sm text-yellow-300 mt-0.5">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
                <span className="text-white ml-2 font-medium transition-all duration-1000">{theme.storeInfo.rating} ({theme.storeInfo.reviewsCount} Reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-2">
            <span className="text-base text-white/80">Not Yet Member?</span>
            <button className="text-base font-semibold underline decoration-2 underline-offset-4 hover:text-white/80 transition">
              Sign Up Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end relative">
           <div className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden bg-brand-light shadow-2xl relative border-8 border-white/10">
             <img 
               src="https://i.pinimg.com/736x/b0/fc/85/b0fc85531db5d5e509ff393879142be6.jpg" 
               alt="Fashion Model" 
               className="w-full h-full object-cover object-top scale-105"
             />
           </div>
        </div>
      </div>
    </div>
  );
}
