import { Product } from "@/types";
import { LIMIT } from "@/constants";

const BASE_URL: string = "https://api.escuelajs.co/api/v1";

export async function fetchProductList(pageParam: number, searchQuery: string): Promise<Product[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/products?title=${searchQuery}&limit=${LIMIT}&offset=${pageParam * LIMIT}`
    );
    const productList = await response.json();
    return productList;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
