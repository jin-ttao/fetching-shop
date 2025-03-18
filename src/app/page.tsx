import Image from "next/image";

export default function Home() {
  const mockItemList = [
    {
      id: 1,
      title: "title",
      discountRate: "30",
      originalPrice: "10000",
      discountPrice: "7000",
    },
    {
      id: 2,
      title: "title",
      discountRate: "45",
      originalPrice: "10000",
      discountPrice: "5500",
    },
    {
      id: 3,
      title: "title",
      discountRate: "10",
      originalPrice: "10000",
      discountPrice: "9000",
    },
    {
      id: 4,
      title: "title",
      discountRate: "10",
      originalPrice: "10000",
      discountPrice: "9000",
    },
    {
      id: 5,
      title: "title",
      discountRate: "10",
      originalPrice: "10000",
      discountPrice: "9000",
    },
  ];

  return (
    <div>
      <main className="grid grid-cols-4 gap-4">
        {mockItemList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-4"
          >
            <Image
              className="border-2 border-gray-300 rounded-md"
              src="/sample.png"
              alt="sample image"
              width={100}
              height={100}
            />
            <div className="flex gap-2 items-center justify-center">
              <span className="text-lg font-bold">{item.title}</span>
              <span className="text-red-500">{item.discountRate}%</span>
              <span className="text-gray-500 line-through">{item.originalPrice}</span>
              <span className="text-blue-500">{item.discountPrice}</span>
            </div>
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
