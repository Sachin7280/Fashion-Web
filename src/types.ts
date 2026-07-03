export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
}
