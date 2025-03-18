"use client";

import { useState } from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchQuery, setSearchQuery }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>(searchQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          className="w-[20vw] h-10 border-2 border-gray-300 rounded px-2"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
