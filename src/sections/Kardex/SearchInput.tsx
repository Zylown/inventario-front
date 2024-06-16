import React from "react";

export default function SearchInput() {
  //2024-06-05 o 2024-12-28
  return (
    <div className="flex flex-grow items-center sm:gap-9 gap-2">
      <label className="text-white font-semibold text-lg" htmlFor="date">
        Buscar fecha:{" "}
      </label>
      <input
        className="w-full p-2 bg-crema rounded-lg outline-none"
        type="date"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
