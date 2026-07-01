import React from "react";

const Card = (props) => {
  const { name, year, description, image } = props;

  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-[#111111] border border-red-900/50 shadow-lg hover:shadow-red-700/30 hover:-translate-y-2 transition-all duration-300 group">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-full mb-4">
          🎬 Movie
        </span>

        {/* Movie Name */}
        <h2 className="text-2xl font-bold text-white mb-3">
          {name}
        </h2>

        {/* Release Year */}
        <p className="text-red-400 font-medium mb-3">
          📅 Release: {year}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-6 mb-6">
          {description}
        </p>

        {/* Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition duration-300">
          ▶ Watch Now
        </button>
      </div>
    </div>
  );
};

export default Card;