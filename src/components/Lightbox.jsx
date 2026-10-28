import { useEffect } from "react";

export default function Lightbox({ image, images, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const currentIndex = image
    ? images.findIndex((item) => item.id === image.id)
    : -1;

  const showNext = () => {
    if (!image || images.length === 0) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(images[nextIndex]);
  };
  const showPrevious = () => {
    if (!image || images.length === 0) return;
    const previousIndex = (currentIndex - 1 + images.length) % images.length;

    onNavigate(images[previousIndex]);
  };

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-3xl text-white hover:text-yellow-400"
      >
        &times;
      </button>
      <button
        onClick={showPrevious}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-yellow-400"
      >
        &#10094;
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[85vh] max-w-full rounded-xl object-contain"
      />
      <button
        onClick={showNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-yellow-400"
      >
        &#10095;
      </button>
    </div>
  );
}
