"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import ProductItem from "./ProductItem";
import { fetchProductList } from "@/api/fetchProductList";
import { Product } from "@/types";
import { LIMIT } from "@/constants";
import InfiniteScroll from "react-infinite-scroll-component";

interface ProductListProps {
  initialProductList: Product[];
}

export default function ProductList({ initialProductList }: ProductListProps) {
  const {
    data: productList,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["productList"],
    queryFn: ({ pageParam = 1 }) => fetchProductList(pageParam),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === LIMIT ? pages.length + 1 : undefined;
    },
    initialData: {
      pages: [initialProductList],
      pageParams: [1],
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="p-10">
      <InfiniteScroll
        dataLength={productList.pages.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<span>Loading...</span>}
        endMessage={<span>end</span>}
      >
        <div className="grid grid-cols-4 gap-5">
          {productList.pages.map((page) =>
            page.map((item: Product) => <ProductItem key={item.id} item={item} />)
          )}
        </div>
      </InfiniteScroll>
    </main>
  );
}
