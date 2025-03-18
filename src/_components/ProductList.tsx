import ProductItem from "./ProductItem";

import { Product } from "@/types";

async function fetchProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  return productList;
}

export default async function ProductList() {
  const productList = await fetchProductList();

  return (
    <main className="grid grid-cols-4 gap-4">
      {productList.map((item: Product) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </main>
  );
}
