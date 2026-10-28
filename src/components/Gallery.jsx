import { useState } from "react";
import images from "../data/images";
import Lightbox from "./Lightbox";
export default function Gallery({ activeCategory }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);
  return (
    <section id="gallery" className="px-4 pb-12 sm:px-6">
      <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
        Explore Gallery
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((image) => (
          <img
            onClick={() => setSelectedImage(image)}
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="h-64 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

      <Lightbox
        images={filteredImages}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNavigate={setSelectedImage}
      />
    </section>
  );
}
