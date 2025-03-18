"use client";

import { useEffect, useState } from "react";

import { Product } from "@/types";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchQuery, setSearchQuery }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>(searchQuery);
  const [options, setOptions] = useState<{ id: number; title: string }[]>([]);
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue.length > 0) {
      const fetchOptions = async () => {
        try {
          const response = await fetch(
            `https://api.escuelajs.co/api/v1/products?title=${inputValue}`
          );
          const data = await response.json();
          setOptions(
            data.map((item: Product) => {
              return {
                id: item.id,
                title: item.title,
              };
            })
          );
        } catch (error) {
          console.error(error);
        }
      };
      fetchOptions();
    }
  }, [inputValue]);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          className="relative w-[20vw] h-10 border-2 border-gray-300 rounded px-2"
          onChange={handleInputChange}
        />
      </form>
      {inputValue && isOpenOptions && options.length > 0 && (
        <div className="absolute top-20 left-10 w-[20vw] h-[30vh] overflow-y-auto bg-white border-2 border-gray-300 rounded">
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
