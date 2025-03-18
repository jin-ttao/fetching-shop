import { Product } from "@/types";
import { LIMIT } from "@/constants";

const BASE_URL: string = "https://api.escuelajs.co/api/v1";

export async function fetchProductList(pageParam: number): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/products?offset=${pageParam * LIMIT}&limit=${LIMIT}`);
    const productList = await response.json();

    return productList;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
