import React, { useState, useEffect } from "react";
import Axios from "axios";
import SearchBar from "../components/Search";
import Results from "../view/Results";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
// import "./App.css";

// fundamental remark: this would be way cooler if I configured it to represent my own preferences and in a click of a button I get a recommendation for how I'm feeling that moment (love sad, wanting to party etc.). Also, should not have seen the before
// maybe better instead of moviedetails: jeroen had good idea: get youtube key from https://developers.themoviedb.org/3/movies/get-movie-videos and set as parameter inhttps://www.youtube.com/watch?v=UcmZN0Mbl04 probably will be method changing

// note: need to write this with starting capital letter (at the very least if you want to use it as a component)
function Home() {
  const [SearchTextHigher, setSearchTextHigher] = useState(
    "enter keywords to find movies higher"
  );

  const handleSearchTextHigher = event => {
    setSearchTextHigher(event.target.value);
  };

  const inititalMovies = {
    results: [
      {
        id: 0,
        title: "Movie1"
      }
    ]
  };

  const [MoviesHigher, setMoviesHigher] = useState(inititalMovies);

  const handleMovieSearchHigher = event => {
    if (SearchTextHigher) {
      const key = "bde60eb3d70191bf80d726a2da4ae238";
      const query = SearchTextHigher;
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then(res => {
        const movies = res.data;
        setMoviesHigher(movies);
      });
    }
    setSearchTextHigher("");
    event.preventDefault();
  };

  // suggested that I use this, but for what? Couple of ideas: new api-request with every letter typed in search (probably a bad idea)
  useEffect(() => {
    console.log("use effect fires");
  });

  return (
    <div className="container-fluid">
      <header className="row">
        <h1 className="w-100">React Netflix App</h1>
        <SearchBar
          // confusing names? Well, I thought it made most sense to have props.lower as a name for something that is used at that level, while props.functionHigher is something that is moved up
          SearchTextLower={SearchTextHigher}
          handleSearchTextHigher={handleSearchTextHigher}
          handleMovieSearchHigher={handleMovieSearchHigher}
        />
        <Router>
          <Results MoviesLower={MoviesHigher} />
        </Router>
      </header>
      <main className="row">
        <h2 className="w-100">Movies</h2>
        {/* <Results MoviesLower={MoviesHigher} /> */}
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default Home;
