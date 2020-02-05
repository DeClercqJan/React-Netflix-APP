import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "../components/Card";

function SearchBar() {
  const inititalMovies = {
    results: [
      {
        id: 0,
        title: "Movie1"
      }
    ]
  };

  const [Movies, setMovies] = useState(inititalMovies);

  const handleMovieSearch = event => {
    // console.log(event);
    if (SearchText) {
      const key = "bde60eb3d70191bf80d726a2da4ae238";
      const query = SearchText;
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then(res => {
        const movies = res.data;
        setMovies(movies);
      });
    }
    setSearchText("");
    event.preventDefault();
  };

  const [SearchText, setSearchText] = useState("enter keywords to find movies");

  const handleSearchText = event => {
    // console.log(event.target.value);
    setSearchText(event.target.value);
  };

  const MoviesDisplayed = () => {
    // console.log({ Movies });
    const moviesListUnformated = { Movies };
    // console.log(moviesListUnformated);
    // console.log(moviesListUnformated.Movies.results);
    const moviesListUnformated2 = moviesListUnformated.Movies.results;
    // console.log(moviesListUnformated2);
    const moviesListFormated = moviesListUnformated2.map(movieUnformated => {
      // console.log(movieUnformated.title);
      // console.log(movieUnformated);
      return <Card movieData={movieUnformated} />;
    });
    // console.log(moviesListFormated);
    return moviesListFormated;
    // return moviesListUnformated.Movies.results[0].title;
  };

  // suggested that I use this, but for what? Couple of ideas: new api-request with every letter typed in search (probably a bad idea)
  useEffect(() => {
    console.log("use effect fires");
  });

  return (
    <nav>
      <form onSubmit={handleMovieSearch}>
        <input
          type="search"
          value={SearchText}
          onChange={handleSearchText}
        ></input>
        <button type="submit">Click Me</button>
        <MoviesDisplayed />
      </form>
    </nav>
  );
}

export default SearchBar;
