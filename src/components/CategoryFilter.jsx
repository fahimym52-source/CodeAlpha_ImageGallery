import { useState } from "react";

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 py-8">
      <button
        onClick={() => setActiveCategory("All")}
        className={`rounded-full px-5 py-2 font-medium transition-colors ${
          activeCategory === "All"
            ? "bg-yellow-400 text-black"
            : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setActiveCategory("Nature")}
        className={`rounded-full px-5 py-2 font-medium  transition-colors ${
          activeCategory === "Nature"
            ? "bg-yellow-400 text-black"
            : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
        }`}
      >
        Nature
      </button>

      <button
        onClick={() => setActiveCategory("Cities")}
        className={`rounded-full px-5 py-2 font-medium transition-colors  ${
          activeCategory === "Cities"
            ? "bg-yellow-400 text-black"
            : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
        }`}
      >
        Cities
      </button>

      <button
        onClick={() => setActiveCategory("People")}
        className={`rounded-full px-5 py-2 font-medium transition-colors  ${
          activeCategory === "People"
            ? "bg-yellow-400 text-black"
            : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
        }`}
      >
        People
      </button>

      <button
        onClick={() => setActiveCategory("Animals")}
        className={`rounded-full px-5 py-2 font-medium transition-colors ${
          activeCategory === "Animals"
            ? "bg-yellow-400 text-black"
            : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
        }`}
      >
        Animals
      </button>
      <button
        onClick={() => setActiveCategory("Technology")}
        className={`rounded-full px-5 py-2 font-medium transition-colors ${
          activeCategory === "Technology"
            ? "bg-yellow-400 text-black"
            : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
        }`}
      >
        Technology
      </button>
    </div>
  );
}
