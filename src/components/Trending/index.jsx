import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "./moviesData";

const Trending = () => (
  <>
    <h4 className="pb-4 border-b border-primary mb-6">Trending</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-12">
      <MovieCard />
    </div>
    <div className="flex justify-center">
      <button className="btn hover:scale-125 transition ease-out duration-500">
        Loading
      </button>
    </div>
  </>
);

export default Trending;
