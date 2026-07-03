import { ShoppingCart } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function ProductGrid() {
  const { theme } = useTheme();

  return (
    <div className="max-w-[1600px] mx-auto px-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {theme.products.map((product) => (
          <div 
            key={product.id} 
            className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              
              {/* Product Info (Revealed on hover) */}
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg leading-tight transition-all duration-1000">{product.name}</h3>
                <p className="text-white/80 text-xs mt-1 mb-2">High Quality Material</p>
                <div className="text-white font-black text-xl mb-3 transition-all duration-1000">₹{product.price}</div>
                
                <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition w-max">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Badges */}
            {product.badge && (
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {product.badge}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
