import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Card from "../src/components/Card";
// import "./App.css";

function App() {
  // note: need to write this with starting capital letter (at the very least if you want to use it as a component)
  function GetMovies() {
    const inititalMovies = {
      results: [
        {
          id: 0,
          title: "Movie1"
        }
      ]
    };

    const [Movies, setMovies] = useState(inititalMovies);
    const [SearchText, setSearchText] = useState(
      "enter keywords to find movies"
    );

    const handleSearchText = event => {
      // console.log(event.target.value);
      setSearchText(event.target.value);
    };

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

    // suggested that I use this, but for what?
    useEffect(() => {
      console.log("use effect fires");
    });

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

    return (
      <Fragment>
        <header>
          <h1>React Netflix App</h1>
          {/* <p>You clicked {Movies[0]} times</p> */}
          {/* function for form needs to on form element */}
          <nav>
            <form onSubmit={handleMovieSearch}>
              <input
                type="search"
                value={SearchText}
                onChange={handleSearchText}
              ></input>
              <button type="submit">Click Me</button>
            </form>
          </nav>
        </header>
        <main>
          <h2>Movies</h2>
          <MoviesDisplayed />
        </main>
        <footer></footer>
      </Fragment>
    );
  }

  return (
    <div>
      <GetMovies />
    </div>
  );
}
export default App;
