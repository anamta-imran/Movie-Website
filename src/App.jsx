import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";


const App = () => {
 



 
let movies = [
  {
    id: 1,
    name: "Frozen",
    year: 2025,
    genre: "Animation",
    rating: 8.2,
    duration: "102 min",
    description: "A magical adventure of two sisters.",
    isAnimated: true,
    image: "./frozen.jpg",
  },
  {
    id: 2,
    name: "Toy Story",
    year: 2019,
    genre: "Animation",
    rating: 8.5,
    duration: "100 min",
    description: "Toys come to life when humans are away.",
    isAnimated: true,
    image: "./toy.jpg",
  },
  {
    id: 3,
    name: "The Lion King",
    year: 2021,
    genre: "Adventure",
    rating: 8.6,
    duration: "118 min",
    description: "A young lion discovers his destiny.",
    isAnimated: true,
    image: "./loin.jpg",
  },
  {
    id: 4,
    name: "Moana",
    year: 2018,
    genre: "Adventure",
    rating: 7.8,
    duration: "107 min",
    description: "A brave girl sails across the ocean.",
    isAnimated: true,
    image: "./moana.jpg",
  },
  {
    id: 5,
    name: "Coco",
    year: 2022,
    genre: "Fantasy",
    rating: 8.4,
    duration: "105 min",
    description: "A boy travels to the Land of the Dead.",
    isAnimated: true,
    image: "./coco.jpg",
  },

  {
    id: 6,
    name: "Inside Out",
    year: 2025,
    genre: "Family",
    rating: 8.3,
    duration: "95 min",
    description: "A girl's emotions guide her through life.",
    isAnimated: true,
    image: "./inside.jpg",
  },
   {
    id: 7,
    name: "Zootopia",
    year: 2024,
    genre: "Comedy",
    rating: 8.0,
    duration: "108 min",
    description: "A rabbit police officer solves a mystery.",
    isAnimated: true,
    image: "./zootopia.jpg",
  },
  {
    id: 8,
    name: "Encanto",
    year: 2023,
    genre: "Musical",
    rating: 7.9,
    duration: "109 min",
    description: "A magical family protects their home.",
    isAnimated: true,
    image: "./encanto.jpg",
  },
 {
    id: 9,
    name: "Cars",
    year: 2020,
    genre: "Comedy",
    rating: 7.5,
    duration: "117 min",
    description: "A racing car learns the value of friendship.",
    isAnimated: true,
    image: "./cars.jpg",
  },
 

];

  return (
    <>
      
<Navbar/>
      <Hero />
      
      <div className="bg-black flex gap-6 flex-wrap justify-center p-30">
      {movies
        .filter((movie) => movie.year)
        .map((movie) => (
          <div key={movie.id}>
            <Card 
            name={movie.name} 
            year={movie.year}
            description={movie.description}
            image={movie.image}
            />
            {/* <h1>{movie.name}</h1>
            <p>{movie.year}</p> */}
          </div>
          
        ))}
        </div>
<Footer/>

        
    </>
  );
};

export default App;
