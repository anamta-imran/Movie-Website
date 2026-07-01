import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left Side */}
        <div className="max-w-xl">
          <p className="text-red-500 font-semibold text-lg">
            🎬 Trending Movie
          </p>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
            Unlimited Movies,
            <br />
            TV Shows &<span className="text-red-600"> Entertainment</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Discover the latest blockbusters, timeless classics, and exciting
            adventures. Watch your favorite movies anytime, anywhere.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-lg font-semibold transition">
              Watch Now
            </button>

            <button className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src="./hero.png"
            alt="Hero"
            className="w-450px rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
