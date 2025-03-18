export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export interface ProductDetail extends Product {
  discountRate: number;
  stock: number;
}
