import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import MoviesList from "./Results";
// import SearchBar from "../components/Search";
// import Results from "../view/Results";
// import { BrowserRouter, Route } from "react-router-dom";
// import MoviesList from "../view/Results";

// // import React from "react";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";

function Home() {
  // const [SearchTextHigher, setSearchTextHigher] = useState(
  //   "enter keywords to find movies higher"
  // );

  // const handleSearchTextHigher = event => {
  //   setSearchTextHigher(event.target.value);
  // };

  // const inititalMovies = {
  //   results: [
  //     {
  //       id: 0,
  //       title: "Movie1"
  //     }
  //   ]
  // };

  // const [MoviesHigher, setMoviesHigher] = useState(inititalMovies);

  // const handleMovieSearchHigher = event => {
  //   if (SearchTextHigher) {
  //     const key = "bde60eb3d70191bf80d726a2da4ae238";
  //     const query = SearchTextHigher;
  //     Axios.get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  //     ).then(res => {
  //       const movies = res.data;
  //       console.log(movies);
  //       setMoviesHigher(movies);
  //     });
  //   }
  //   setSearchTextHigher("");
  //   event.preventDefault();
  // };

  const [moviesNowPlaying, setmoviesNowPlaying] = useState(null);

  // if (searchText2 !== "") {
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const FetchData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    ).then(res => {
      const moviesSearched = res.data;
      //console.log(moviesSearched.results[0].title);
      setmoviesNowPlaying(moviesSearched);
    });
  };
  useEffect(() => {
    FetchData();
    // [] means it'll only run on first render
  }, []);
  // }

  console.log(moviesNowPlaying);

  return (
    <Fragment>
      <p>home</p>
      <br />
      {moviesNowPlaying ? (
        <Fragment>
          <p>{`de titel van de eerste film is ${moviesNowPlaying.results[0].title}`}</p>
          <MoviesList moviesList={moviesNowPlaying} />
        </Fragment>
      ) : (
        "foutje"
      )}
    </Fragment>
  );
}

export default Home;
