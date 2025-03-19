"use client";

import { useEffect, useState } from "react";

import { Product } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredProductIdList: number[];
}

export default function Search({
  searchQuery,
  setSearchQuery,
  filteredProductIdList,
}: SearchProps) {
  const [inputValue, setInputValue] = useState<string>(searchQuery);
  const [options, setOptions] = useState<{ id: number; title: string }[]>([]);
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);
  const debouncedSearchQuery = useDebounce({
    value: inputValue,
    delay: 500,
  });

  useEffect(() => {
    if (debouncedSearchQuery.length > 0) {
      const fetchOptions = async () => {
        try {
          const response = await fetch(
            `https://api.escuelajs.co/api/v1/products?title=${debouncedSearchQuery}`
          );
          const data = await response.json();
          const filteredData = data.filter((product: Product) =>
            filteredProductIdList.includes(product.id)
          );
          setOptions(
            filteredData.map((product: Product) => {
              return {
                id: product.id,
                title: product.title,
              };
            })
          );
        } catch (error) {
          console.error(error);
        }
      };
      fetchOptions();
    }
  }, [debouncedSearchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpenOptions(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setIsOpenOptions(false);
  };

  const handleOptionClick = (option: { id: number; title: string }) => {
    setInputValue(option.title);
    setSearchQuery(option.title);
    setOptions([]);
    setIsOpenOptions(false);
  };

  return (
    <div className="relative flex items-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="relative">
          <span className="mr-3">Search</span>
          <input
            type="text"
            value={inputValue}
            className="w-[20vw] h-10 border-2 border-gray-300 rounded px-2"
            onChange={handleInputChange}
          />
        </label>
      </form>
      {inputValue && isOpenOptions && options.length > 0 && (
        <div className="absolute top-10 right-0 w-[20vw] h-[30vh] overflow-y-auto bg-white border-2 border-gray-300 rounded">
          {options.map((option) => (
            <div
              key={option.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
