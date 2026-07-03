import { Review, Product } from './types';

export interface Theme {
  id: string;
  wrapperBg: string;
  storeInfo: {
    name: string;
    nameHindi: string;
    offer: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroDesc: string;
    category: string;
    address: string;
    hours: string;
    phone: string;
    rating: number;
    reviewsCount: number;
  };
  categories: string[];
  shades: { title: string, img: string, color: string }[];
  products: Product[];
  reviews: Review[];
}

const baseShadesImages = [
  "https://i.pinimg.com/736x/8e/85/d4/8e85d481b92eafe7dfe5de0bce1695ee.jpg",
  "https://i.pinimg.com/1200x/87/ab/b0/87abb025d5d8c9989459066a619279b0.jpg",
  "https://i.pinimg.com/736x/a0/85/a6/a085a6c46359fe8b9f2c1daee14c7431.jpg",
  "https://i.pinimg.com/736x/07/4c/0a/074c0a0fae877bda7a8b10e8ad73721f.jpg"
];

const baseProductImageSequence = [
  "https://i.pinimg.com/736x/8e/85/d4/8e85d481b92eafe7dfe5de0bce1695ee.jpg",
  "https://i.pinimg.com/1200x/87/ab/b0/87abb025d5d8c9989459066a619279b0.jpg",
  "https://i.pinimg.com/736x/a0/85/a6/a085a6c46359fe8b9f2c1daee14c7431.jpg",
  "https://i.pinimg.com/736x/07/4c/0a/074c0a0fae877bda7a8b10e8ad73721f.jpg",
  "https://i.pinimg.com/736x/b0/fc/85/b0fc85531db5d5e509ff393879142be6.jpg",
  "https://i.pinimg.com/736x/d6/76/dc/d676dc127603f97cd87e031fb96ec40d.jpg",
  "https://i.pinimg.com/736x/8e/85/d4/8e85d481b92eafe7dfe5de0bce1695ee.jpg",
  "https://i.pinimg.com/1200x/87/ab/b0/87abb025d5d8c9989459066a619279b0.jpg"
];

const createTheme = (
  id: string, wrapperBg: string,
  name: string, nameHindi: string,
  offer: string, title1: string, title2: string, desc: string,
  cat1: string, cat2: string, cat3: string, cat4: string,
  cats: string[], prodNames: string[],
  review1Auth: string, review1Text: string,
  review2Auth: string, review2Text: string
): Theme => ({
  id, wrapperBg,
  storeInfo: {
    name, nameHindi, offer, heroTitleLine1: title1, heroTitleLine2: title2, heroDesc: desc,
    category: "Clothing store", address: "Plot No.B-27, City Centre, Sector 4, Bokaro Steel City",
    hours: "Open · Closes 9 pm", phone: "093341 83827", rating: 4.8, reviewsCount: 120 + Math.floor(Math.random()*100)
  },
  categories: cats,
  shades: [
    { title: cat1, color: "bg-pink-100 text-pink-900", img: baseShadesImages[0] },
    { title: cat2, color: "bg-yellow-100 text-yellow-900", img: baseShadesImages[1] },
    { title: cat3, color: "bg-gray-100 text-gray-900", img: baseShadesImages[2] },
    { title: cat4, color: "bg-stone-100 text-stone-900", img: baseShadesImages[3] }
  ],
  products: prodNames.map((n, i) => ({
    id: `p${i}`, name: n, price: 499 + i * 150, image: baseProductImageSequence[i], badge: i % 3 === 0 ? "Sale" : undefined
  })),
  reviews: [
    { id: "r1", author: review1Auth, rating: 5, text: review1Text, time: "2 months ago" },
    { id: "r2", author: review2Auth, rating: 5, text: review2Text, time: "4 months ago" }
  ]
});

export const themes: Theme[] = [
  createTheme("t1", "bg-rose-100", "New Milan Dresses", "न्यू मिलान कपड़े", "Exclusive Offer 20% off This Week", "Stylish", "Clothes & Uniforms", "Visit New Milan Dresses in Bokaro Steel City for the best collection.", "Ethnic Wear", "School Uniforms", "Men's Fashion", "Western Wear", ["All", "Dresses", "Uniforms", "Denim", "Jackets", "Coats"], ["Casual Black Top", "Pink Summer Crop", "Short Party Dress", "Shimmer Evening Wear", "School Uniform Set", "Western Denim Look", "Classic Overcoat", "Ethnic Kurti"], "Logical Comrade", "I recently visited and was thoroughly impressed with their collection!", "saurabh kumar", "Collections are good but price a bit high, staff behaviour is fine."),
  
  createTheme("t2", "bg-slate-200", "Urban Styles", "अर्बन स्टाइल्स", "Streetwear Drop: Flat 30% Off", "Modern", "Street & Casual", "Discover the latest urban fashion trends and elevate your everyday look.", "Streetwear", "Sneakers", "Accessories", "Lounge Wear", ["New In", "Tees", "Hoodies", "Jeans", "Caps", "Sneakers"], ["Oversized Graphic Tee", "Cargo Pants", "Varsity Jacket", "Chunky Sneakers", "Ribbed Beanie", "Utility Vest", "Distressed Denim", "Boxy Crop Top"], "Aisha Singh", "Amazing collection of streetwear! The fit is oversized just how I like it.", "Rahul D.", "Great quality, but limited sizes. Still, one of the best spots in town."),

  createTheme("t3", "bg-amber-100", "Elegance Boutique", "एलिगेंस बुटीक", "Luxury Edit - VIP Pre-Sale", "Timeless", "Luxury & Couture", "Experience true craftsmanship with our curated selection of premium garments.", "Evening Gowns", "Bridal Wear", "Formal Suits", "Fine Jewelry", ["Collection", "Gowns", "Suits", "Bridal", "Jewelry", "Shoes"], ["Silk Evening Gown", "Tailored Tuxedo", "Pearl Necklace", "Velvet Blazer", "Lace Mermaid Dress", "Crystal Heels", "Satin Clutch", "Chiffon Scarf"], "Priya M.", "Found my dream dress here. The attention to detail is truly unmatched.", "Vikram S.", "Excellent bespoke service. The tailor really knows his craft."),

  createTheme("t4", "bg-sky-100", "Kids Corner", "किड्स कॉर्नर", "Back to School: Buy 2 Get 1 Free", "Playful", "Kids & Toddlers", "Bright, comfortable, and durable clothing for your little ones' everyday adventures.", "Toddler Wear", "School Uniforms", "Party Dresses", "Sleepwear", ["Boys", "Girls", "Infant", "Uniforms", "Shoes", "Toys"], ["Cotton Romper", "Princess Party Dress", "Superhero Tee", "Denim Overalls", "School Sweater", "Light-up Sneakers", "Fleece Pajamas", "Raincoat"], "Neha Sharma", "My kids love the colorful designs, and the fabrics are super soft.", "Amit P.", "Good quality school uniforms that survive playground wear and tear!"),

  createTheme("t5", "bg-indigo-100", "Winter Wonders", "विंटर वंडर्स", "Winter Clearance - Up to 50% Off", "Cozy", "Outerwear & Knits", "Stay warm and stylish this season with our premium collection of coats and knits.", "Heavy Coats", "Sweaters", "Thermal Wear", "Winter Accessories", ["Coats", "Knitwear", "Thermals", "Boots", "Scarves", "Gloves"], ["Wool Blend Coat", "Cable Knit Sweater", "Thermal Leggings", "Leather Gloves", "Puffer Jacket", "Snow Boots", "Cashmere Scarf", "Fleece Beanie"], "Sneha K.", "The cashmere sweaters are divine. So soft and incredibly warm.", "Rajat M.", "Bought a puffer jacket for my trip, performed brilliantly in the snow."),

  createTheme("t6", "bg-orange-100", "Summer Vibes", "समर वाइब्स", "Beach Ready - 15% Off Swimwear", "Breezy", "Resort & Beach", "Embrace the sun with our lightweight, breathable summer collections.", "Swimwear", "Resort Wear", "Sunglasses", "Sandals", ["Swim", "Dresses", "Shorts", "Tops", "Accessories", "Footwear"], ["Floral Maxi Dress", "Linen Shirt", "Bikini Set", "Straw Hat", "Board Shorts", "Aviator Sunglasses", "Leather Sandals", "Cotton Cover-up"], "Maya D.", "Perfect place for holiday shopping. The linen shirts are a must-have.", "Karan V.", "Great sunglasses and beachwear. Loved the vibrant prints."),

  createTheme("t7", "bg-lime-100", "Active Gear", "एक्टिव गियर", "New Arrivals: Performance Series", "Dynamic", "Sport & Fitness", "Push your limits with our advanced moisture-wicking activewear.", "Running", "Yoga & Pilates", "Gym Training", "Sports Accessories", ["Mens", "Womens", "Shoes", "Equipment", "Bags", "Nutrition"], ["Compression Tights", "Breathable Tank", "Running Shoes", "Yoga Mat", "Windbreaker", "Sports Bra", "Gym Duffel", "Water Bottle"], "Riya J.", "The leggings are squat-proof and super comfortable for workouts.", "Samir T.", "Excellent running shoes. Improved my marathon time noticeably."),

  createTheme("t8", "bg-fuchsia-100", "Heritage Silks", "हेरिटेज सिल्क्स", "Festive Collection Launched", "Traditional", "Ethnic Elegance", "Celebrate your roots with our exquisite collection of hand-woven ethnic wear.", "Sarees", "Lehengas", "Kurta Sets", "Ethnic Jewelry", ["Sarees", "Kurtas", "Lehengas", "Mens", "Kids", "Accessories"], ["Banarasi Silk Saree", "Embroidered Lehenga", "Cotton Kurta Set", "Kundan Necklace", "Sherwani", "Jhumka Earrings", "Silk Dupatta", "Mojari Shoes"], "Anjali B.", "The sarees are absolutely gorgeous. Authentic weaves and great colors.", "Sunil R.", "Bought a sherwani for my brother's wedding. Perfect fit and embroidery."),

  createTheme("t9", "bg-zinc-200", "Corporate Chic", "कॉर्पोरेट ठाठ", "Office Essentials Bundle - Save 20%", "Professional", "Workwear & Suits", "Command the boardroom with our sharp, tailored professional attire.", "Men's Suits", "Women's Formals", "Office Bags", "Formal Shoes", ["Suits", "Shirts", "Trousers", "Skirts", "Bags", "Shoes"], ["Tailored Blazer", "Crisp Oxford Shirt", "Pencil Skirt", "Leather Briefcase", "Slim Fit Trousers", "Oxford Shoes", "Silk Tie", "Trench Coat"], "Smriti V.", "Finally found workwear that is both stylish and comfortable for long days.", "Deepak N.", "The suits fit perfectly off the rack. Very impressed with the tailoring."),

  createTheme("t10", "bg-teal-100", "The Denim Hub", "द डेनिम हब", "Denim Days - Flat ₹500 Off", "Rugged", "Jeans & Casuals", "Find your perfect fit from our massive selection of premium denim.", "Skinny Fit", "Straight Leg", "Denim Jackets", "Vintage Wash", ["Jeans", "Jackets", "Shirts", "Shorts", "Overalls", "Accessories"], ["Classic Blue Jeans", "Ripped Denim Jacket", "Chambray Shirt", "High-Waist Shorts", "Denim Overalls", "Leather Belt", "Black Skinny Jeans", "Canvas Sneakers"], "Tina S.", "The best jeans I've ever owned. They hold their shape perfectly.", "Varun K.", "Huge variety of fits and washes. Found exactly what I was looking for.")
];
