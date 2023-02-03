import { useState } from "react";
import "./styles.css";

const MovieDB = {
  Action: [
    { name: "Uncharted", rating: "6.3 / 10" },
    { name: "Mission: Impossible - Fallout", rating: "7.7 / 10" },
    { name: "Knight and Day", rating: "6.3 / 10" },
  ],
  Adventure: [
    { name: "Jungle Cruise", rating: "6.6 / 10" },
    { name: "Jumanji: The Next Level", rating: "6.7 / 10" },
    { name: "A Quiet Place", rating: "7.5 / 10" },
  ],
  "Sci-fi": [
    { name: "Star Trek", rating: "7.9 / 10" },
    { name: "The Incredible Hulk", rating: "6.6 / 10" },
    { name: "Hellboy II: The Golden Army", rating: "7.0 / 10" },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 className="heading">MoviePedia</h1>
      <p className="desc">
        {" "}
        Checkout my some top-picked movie. Select genre to get started{" "}
      </p>
      <div className="genre-list">
        {Object.keys(MovieDB).map((genre) => (
          <button
            className="button"
            key={genre}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="movie-list">
        <ul>
          {MovieDB[selectedGenre].map((movie) => (
            <li key={movie.name}>
              {" "}
              <div className="name"> {movie.name} </div>
              <div className="rating"> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
