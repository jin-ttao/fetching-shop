import Image from "next/image";

import { Product } from "@/types";

const IMAGE_SIZE = 500;

export default function ProductItem({ item }: { item: Product }) {
  return (
    <div key={item.id} className="flex flex-col gap-2 items-center justify-center p-4">
      <Image
        src={item.images[0]}
        alt={item.title}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        className="w-full h-full max-w-xs max-h-xs rounded"
        priority
      />
      <span className="text-lg font-semibold">{item.title}</span>
      <span className="text-gray-500 line-through">${item.price}</span>
    </div>
  );
}
