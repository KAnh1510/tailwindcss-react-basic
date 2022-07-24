import React from "react";
import { Movie } from "./moviesData";

function MovieCard() {
  return Movie.map((item, index) => {
    const { src, title, main, runtime } = item;
    return (
      <div className="card" key={index}>
        <img src={src} alt="" className="w-full" />
        <div className="p-4 text-white">
          <h4>{title}</h4>
          <p>{main}</p>
        </div>
        <div className="badge">
          <ion-icon name="alarm-outline"></ion-icon>
          <p>{runtime}</p>
        </div>
      </div>
    );
  });
}

export default MovieCard;
