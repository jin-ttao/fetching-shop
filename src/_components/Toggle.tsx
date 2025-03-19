"use client";

import { useState } from "react";

export default function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <label
        htmlFor="toggle"
        className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 ${
          isChecked ? "bg-blue-500" : "bg-gray-500"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? "translate-x-6" : ""}`}
        ></div>
      </label>
      <span className="pl-2 text-md font-semibold text-gray-600">All Products</span>
    </div>
  );
}
