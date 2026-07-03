import { Review, Product } from './types';

export const storeInfo = {
  name: "New Milan Dresses",
  nameHindi: "न्यू मिलान कपड़े",
  rating: 4.0,
  reviewsCount: 47,
  category: "Clothing store",
  address: "Plot No.B-27, City Centre, Sector 4, Bokaro Steel City, Jharkhand 827004",
  hours: "Open · Closes 9 pm",
  phone: "093341 83827",
  plusCode: "M49V+26 Bokaro Steel City, Jharkhand",
  services: ["In-store shopping", "Delivery"]
};

export const reviews: Review[] = [
  {
    id: "1",
    author: "Logical Comrade",
    rating: 5,
    text: "I recently visited New Milan Dresses and was thoroughly impressed with their collection! The variety of ethnic and western wear is stunning, and the quality of fabrics is top-notch. The staff was friendly, helpful, and gave great styling suggestions.",
    time: "a year ago"
  },
  {
    id: "2",
    author: "saurabh kumar",
    rating: 4,
    text: "Collections are good but price a bit high, especially school dresses and accessories, rest staff behaviour and courtesy is fine.",
    time: "7 years ago"
  },
  {
    id: "3",
    author: "Abђi",
    rating: 5,
    text: "Very nice collection of all type of clothes like uniform and fashion dresses also",
    time: "3 years ago"
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Casual Black Top",
    price: 499,
    image: "https://i.pinimg.com/736x/8e/85/d4/8e85d481b92eafe7dfe5de0bce1695ee.jpg",
    badge: "20%"
  },
  {
    id: "p2",
    name: "Pink Summer Crop",
    price: 399,
    image: "https://i.pinimg.com/1200x/87/ab/b0/87abb025d5d8c9989459066a619279b0.jpg"
  },
  {
    id: "p3",
    name: "Short Party Dress",
    price: 790,
    image: "https://i.pinimg.com/736x/a0/85/a6/a085a6c46359fe8b9f2c1daee14c7431.jpg",
    badge: "Hot 🔥"
  },
  {
    id: "p4",
    name: "Shimmer Evening Wear",
    price: 1299,
    image: "https://i.pinimg.com/736x/07/4c/0a/074c0a0fae877bda7a8b10e8ad73721f.jpg"
  },
  {
    id: "p5",
    name: "School Uniform Set",
    price: 850,
    image: "https://i.pinimg.com/736x/b0/fc/85/b0fc85531db5d5e509ff393879142be6.jpg"
  },
  {
    id: "p6",
    name: "Western Denim Look",
    price: 1099,
    image: "https://i.pinimg.com/736x/d6/76/dc/d676dc127603f97cd87e031fb96ec40d.jpg"
  },
  {
    id: "p7",
    name: "Classic Overcoat",
    price: 2499,
    image: "https://i.pinimg.com/736x/8e/85/d4/8e85d481b92eafe7dfe5de0bce1695ee.jpg"
  },
  {
    id: "p8",
    name: "Ethnic Kurti",
    price: 699,
    image: "https://i.pinimg.com/1200x/87/ab/b0/87abb025d5d8c9989459066a619279b0.jpg",
    badge: "Sale"
  }
];
