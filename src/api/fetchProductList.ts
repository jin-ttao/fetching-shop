import { Product } from "@/types";

export async function fetchProductList(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  return productList;
}
