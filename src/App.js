import React, { useState, Fragment } from "react";
import Axios from "axios";
// import "./App.css";

function App() {
  // note: need to write this with starting capital letter (at the very least if you want to use it as a component)
  function GetMovies() {
    const inititalMovies = {
        results : [{
          title: "test1"
        }]
    }

    const [Movies, setMovies] = useState(inititalMovies);
    const [SearchText, setSearchText] = useState(
      "enter keywords to find movies"
    );

    const handleSearchText = event => {
      console.log(event.target.value);
      setSearchText(event.target.value);
    };

    const handleMovieSearch = event => {
      console.log(event);
      if (SearchText) {
        Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=bde60eb3d70191bf80d726a2da4ae238&language=en-US&query=boys&page=1&include_adult=false`
        ).then(res => {
          const movies = res.data;
          setMovies(movies);
        });
      }
      setSearchText("");
      event.preventDefault();
    };

    const MoviesDisplayed = () => {
      console.log({Movies});
      let MoviesList = {Movies};
      console.log(MoviesList);
      return (MoviesList.Movies.results[0].title);
    };

    return (
      <Fragment>
        <div>
          {/* <p>You clicked {Movies[0]} times</p> */}
          {/* function for form needs to on form element */}
          <form onSubmit={handleMovieSearch}>
            <input
              type="search"
              value={SearchText}
              onChange={handleSearchText}
            ></input>
            <button type="submit">Click Me</button>
          </form>
        </div>
        <div>
          <MoviesDisplayed/>
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      <p>test</p>
      <GetMovies />
    </div>
  );
}
export default App;
