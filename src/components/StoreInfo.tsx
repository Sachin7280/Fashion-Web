import { MapPin, Clock, Phone, Star, Navigation } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function StoreInfo() {
  const { theme } = useTheme();

  return (
    <div id="about" className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000">Visit {theme.storeInfo.name}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto transition-all duration-1000">
            Your one-stop destination for {theme.storeInfo.nameHindi}. {theme.storeInfo.heroDesc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Store Details Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Store Location</h3>
                  <p className="text-sm text-gray-500 transition-all duration-1000">{theme.storeInfo.category}</p>
                </div>
              </div>
              
              <div className="space-y-5 text-sm text-gray-600">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="transition-all duration-1000">{theme.storeInfo.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="font-medium text-gray-900 transition-all duration-1000">{theme.storeInfo.hours}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="font-medium transition-all duration-1000">{theme.storeInfo.phone}</span>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
              <button className="flex-1 bg-gray-900 text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <Navigation className="w-4 h-4" /> Directions
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-gray-900 text-xl">Customer Reviews</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl font-black text-gray-900 transition-all duration-1000">{theme.storeInfo.rating}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 text-gray-300 fill-current" />
                  </div>
                  <span className="text-sm text-gray-500 transition-all duration-1000">({theme.storeInfo.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {theme.reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold uppercase transition-all duration-1000">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 transition-all duration-1000">{review.author}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                           {[...Array(review.rating)].map((_, i) => (
                             <Star key={i} className="w-3 h-3 fill-current" />
                           ))}
                        </div>
                        <span className="text-xs text-gray-400 transition-all duration-1000">{review.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 transition-all duration-1000">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
            
            <button className="mt-6 text-gray-900 font-semibold text-sm hover:underline transition-all duration-1000">
              Read all {theme.storeInfo.reviewsCount} reviews &rarr;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
