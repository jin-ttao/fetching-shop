import Image from "next/image";

import { Product } from "@/types";

export default function ProductItem({ item }: { item: Product }) {
  return (
    <div
      key={item.id}
      className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 rounded-md p-4"
    >
      <Image
        src={item.images[0]}
        alt={item.title}
        width={100}
        height={100}
        className="w-[50%] h-auto"
        priority
      />
      <span className="text-lg font-bold">{item.title}</span>
      <span className="text-gray-500 line-through">${item.price}</span>
    </div>
  );
}
