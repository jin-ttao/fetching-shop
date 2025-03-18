import Image from "next/image";

async function fetchProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  return productList;
}

export default async function Home() {
  const productList = await fetchProductList();

  return (
    <div>
      <main className="grid grid-cols-4 gap-4">
        {productList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 rounded-md p-4"
          >
            <Image src={item.image} alt={item.title} width={100} height={100} />
            <span className="text-lg font-bold">{item.title}</span>
            <span className="text-gray-500 line-through">{item.price}</span>
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
