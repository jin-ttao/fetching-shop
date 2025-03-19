import Image from "next/image";

import { ProductDetail } from "@/types";

const IMAGE_SIZE = 500;

export default function ProductItem({ product }: { product: ProductDetail }) {
  const { discountRate, price, stock } = product;
  const discountedPrice = Math.floor(price - (price * discountRate) / 100);
  const imageUrl = product.images[0];
  const isValidImage = imageUrl.startsWith("https://");
  const isSoldOut = stock === 0;

  return (
    <div
      key={product.id}
      className={`flex align-start flex-col gap-2 items-center justify-start p-4 ${isSoldOut ? "opacity-30" : "cursor-pointer hover:border-2 hover:border-orange-500 hover:shadow-md hover:rounded"}`}
    >
      <div className="flex justify-center w-full">
        {isValidImage ? (
          <Image
            src={imageUrl}
            alt={product.title}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            className="w-full h-full max-w-xs max-h-xs rounded"
            priority
          />
        ) : (
          <div className="w-full h-full max-w-xs max-h-xs rounded bg-gray-200" />
        )}
      </div>
      <span className="text-lg font-semibold">{product.title}</span>
      <div className="flex gap-2">
        <span className="text-xl font-semibold text-orange-500">{product.discountRate}%</span>
        <span className="text-xl text-gray-500 line-through">${product.price}</span>
        <span className="text-2xl font-semibold text-black">${discountedPrice}</span>
      </div>
      {isSoldOut && <span className="text-base text-gray-500">Sold Out</span>}
    </div>
  );
}
