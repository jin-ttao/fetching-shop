import { Product } from "@/types";

export const getProductDetail = (products: Product[]) => {
  return products.map((product) => {
    const discountRate = Math.floor(Math.random() * 60) + 1;
    const stock = Math.floor(Math.random() * 6);

    return {
      ...product,
      discountRate,
      stock,
    };
  });
};
