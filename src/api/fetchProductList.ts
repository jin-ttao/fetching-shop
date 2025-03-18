import { Product, ProductDetail } from "@/types";
import { LIMIT } from "@/constants";
import { getProductDetail } from "@/utils/getProductDetail";

const BASE_URL: string = "https://api.escuelajs.co/api/v1";

export async function fetchProductList(
  pageParam: number,
  searchQuery: string
): Promise<ProductDetail[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/products?title=${searchQuery}&limit=${LIMIT}&offset=${pageParam * LIMIT}`
    );
    const productList: Product[] = await response.json();
    return getProductDetail(productList);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
