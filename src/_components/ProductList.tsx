"use client";

import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import Search from "./Search";
import ProductItem from "./ProductItem";
import Toggle from "./Toggle";
import { fetchProductList } from "@/api/fetchProductList";
import { ProductDetail, Filter } from "@/types";
import { LIMIT } from "@/constants";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<Filter>({
    showAllProducts: false,
  });
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
    select: (data): ProductDetail[] => {
      return data.pages.flatMap((product) => {
        return filter.showAllProducts ? product : product.filter((item) => item.stock > 0);
      });
    },
  });
  const filteredProductIdList = productList?.map((product) => product.id);

  return (
    <main className="p-10">
      <div className="flex items-center justify-between">
        <Toggle filter={filter} setFilter={setFilter} />
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredProductIdList={filteredProductIdList ?? []}
        />
      </div>
      <InfiniteScroll
        dataLength={productList?.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<span>Loading...</span>}
        endMessage={isLoading ? <span>Loading...</span> : <span>End of the list</span>}
      >
        <div className="grid grid-cols-4 gap-5">
          {productList?.map((product) => <ProductItem key={product.id} product={product} />)}
        </div>
        {error && <span>Error: {error.message}</span>}
      </InfiniteScroll>
    </main>
  );
}
