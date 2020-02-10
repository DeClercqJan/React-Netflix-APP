import React, { useEffect } from "react";
// import Axios from "axios";
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

  return <p>home</p>;
}

export default Home;
