"use client";

import { Filter } from "@/types";

interface ToggleProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export default function Toggle({ filter, setFilter }: ToggleProps) {
  const handleToggleChange = () => {
    setFilter({ showAllProducts: !filter.showAllProducts });
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={filter.showAllProducts}
        onChange={handleToggleChange}
      />
      <label
        htmlFor="toggle"
        className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 ${
          filter.showAllProducts ? "bg-blue-500" : "bg-gray-500"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
            filter.showAllProducts ? "translate-x-6" : ""
          }`}
        ></div>
      </label>
      <span className="pl-2 text-md font-semibold text-gray-600">All Products</span>
    </div>
  );
}
