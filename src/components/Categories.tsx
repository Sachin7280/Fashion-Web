import { User, Shirt, Crown, Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function PremiumShades() {
  const { theme } = useTheme();
  
  const icons = [
    <Crown className="w-6 h-6" />,
    <User className="w-6 h-6" />,
    <Briefcase className="w-6 h-6" />,
    <Shirt className="w-6 h-6" />,
    <Shirt className="w-6 h-6" />,
    <Shirt className="w-6 h-6" />
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-16 space-y-16">
      {/* Premium Shades Section */}
      <div>
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
            Premium Collections
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-900 rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {theme.shades.map((shade, i) => (
            <div key={i} className={`${shade.color} rounded-full h-24 flex items-center p-2 pr-6 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden group`}>
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 z-10">
                <img src={shade.img} alt={shade.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="ml-4 z-10">
                <h3 className="font-bold text-sm md:text-base leading-tight transition-all duration-1000">{shade.title}</h3>
                {i === 0 && (
                  <button className="text-[10px] uppercase tracking-wider font-bold bg-white/50 px-2 py-1 rounded-full mt-1 text-gray-900">Click Now</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Nav Section */}
      <div id="shop">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
            Category
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-900 rounded-full"></span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {theme.categories.slice(0, 6).map((catName, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${i === 0 ? 'bg-gray-900 text-white shadow-md' : 'bg-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}>
                {icons[i] || <Shirt className="w-6 h-6" />}
              </div>
              <span className={`text-sm font-semibold transition-all duration-1000 ${i === 0 ? 'text-gray-900 border-b-2 border-gray-900 pb-0.5' : 'text-gray-500 group-hover:text-gray-900'}`}>
                {catName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
