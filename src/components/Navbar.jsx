import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="./logo.jpg"
            alt="logo"
            className="w-12 h-12 rounded-full border-2 border-red-600"
          />

          <h1 className="text-3xl font-bold text-red-600 tracking-wide">
            Movie<span className="text-white">Hub</span>
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Movies
          </li>
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            TV Shows
          </li>
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Trending
          </li>
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Contact
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          

          {/* Sign In */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition duration-300">
            Sign In
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;