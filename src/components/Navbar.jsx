export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full border-b border-white/10 bg-gray-950/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white">
          Image<span className="text-yellow-400">Gallery.</span>
        </a>

        <div className="flex items-center gap-8">
          <a href="#" className="text-yellow-400 font-medium transition-colors">
            Home
          </a>

          <a
            href="#gallery"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-900"
          >
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
}
