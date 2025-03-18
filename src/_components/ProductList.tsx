"use client";

import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import Search from "./Search";
import ProductItem from "./ProductItem";
import { fetchProductList } from "@/api/fetchProductList";
import { ProductDetail } from "@/types";
import { LIMIT } from "@/constants";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    data: productList,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["productList", searchQuery],
    queryFn: ({ pageParam = 0 }) => fetchProductList(pageParam, searchQuery),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === LIMIT ? pages.length : undefined;
    },
  });

  return (
    <main className="p-10">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <InfiniteScroll
        dataLength={productList?.pages.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<span>Loading...</span>}
        endMessage={isLoading ? <span>Loading...</span> : <span>End of the list</span>}
      >
        <div className="grid grid-cols-4 gap-5">
          {productList?.pages.map((page) =>
            page.map((item: ProductDetail) => <ProductItem key={item.id} item={item} />)
          )}
        </div>
        {error && <span>Error: {error.message}</span>}
      </InfiniteScroll>
    </main>
  );
}
