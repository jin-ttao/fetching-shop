import ProductList from "@/_components/ProductList";
import { fetchProductList } from "@/api/fetchProductList";

export default async function Home() {
  const initialProductList = await fetchProductList();

  return (
    <div>
      <ProductList initialProductList={initialProductList} />
      <footer></footer>
    </div>
  );
}
