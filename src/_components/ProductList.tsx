import ProductItem from "./ProductItem";
import { Product } from "@/types";

interface ProductListProps {  
  initialProductList: Product[];
}

export default function ProductList({ initialProductList }: ProductListProps) {
  return (
    <main className="grid grid-cols-4 gap-4">
      {initialProductList.map((item: Product) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </main>
  );
}
