"use client";

export default function Toggle() {
  return (
    <div className="flex items-center">
      <input type="checkbox" id="toggle" className="hidden" />
      <label
        htmlFor="toggle"
        className="cursor-pointer w-12 h-6 flex items-center rounded-full p-1"
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
      </label>
      <span className="pl-2 text-md font-semibold text-gray-600">All Products</span>
    </div>
  );
}
