import Image from "next/image";

import { ProductDetail } from "@/types";

const IMAGE_SIZE = 500;

export default function ProductItem({ item }: { item: ProductDetail }) {
  const { discountRate, price, stock } = item;
  const discountedPrice = Math.floor(price - (price * discountRate) / 100);
  const imageUrl = item.images[0];
  const isValidImage = imageUrl.startsWith("https://");
  const isSoldOut = stock === 0;

  return (
    <div
      key={item.id}
      className={`flex align-start flex-col gap-2 items-center justify-start p-4 ${isSoldOut ? "opacity-30" : "cursor-pointer hover:border-2 hover:border-orange-500 hover:shadow-md hover:rounded"}`}
    >
      <div className="flex justify-center w-full">
        {isValidImage ? (
          <Image
            src={imageUrl}
            alt={item.title}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            className="w-full h-full max-w-xs max-h-xs rounded"
            priority
          />
        ) : (
          <div className="w-full h-full max-w-xs max-h-xs rounded bg-gray-200" />
        )}
      </div>
      <span className="text-lg font-semibold">{item.title}</span>
      <div className="flex gap-2">
        <span className="text-xl font-semibold text-orange-500">{item.discountRate}%</span>
        <span className="text-xl text-gray-500 line-through">${item.price}</span>
        <span className="text-2xl font-semibold text-black">${discountedPrice}</span>
      </div>
      {isSoldOut && <span className="text-base text-gray-500">Sold Out</span>}
    </div>
  );
}
