import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Gallery activeCategory={activeCategory} />
    </div>
  );
}

export default App;
