import heroImage from "../assets/heroImage/mount.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-[350px] bg-cover bg-[center-35%]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex h-full pt-35 flex-col items-center justify-center bg-black/300 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Beautiful Moments
        </h1>
        <p className="mt-4 max-w-xl px-4 text-sm text-gray-200 md:text-lg">
          Explore the beauty of the world, one picture at a time.
        </p>
        <div className="mt-8 flex w-full max-w-md overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <input
            type="text"
            placeholder="Search images..."
            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-white outline-none placeholder:text-gray-300"
          />
          <button className="bg-yellow-400 px-6 font-semibold text-gray-950 transition-colors hover:bg-yellow-300">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
