import React, { useState } from "react";
import Axios from "axios";
import SearchBar from "../components/Search";
import Results from "../view/Results";
// import "./App.css";

// fundamental remark: this would be way cooler if I configured it to represent my own preferences and in a click of a button I get a recommendation for how I'm feeling that moment (love sad, wanting to party etc.). Also, should not have seen the before

// note: need to write this with starting capital letter (at the very least if you want to use it as a component)
function Home() {
  const inititalMovies = {
    results: [
      {
        id: 0,
        title: "Movie1"
      }
    ]
  };

  const [test, setTest] = useState("test pushing data up using hooks");
  const [SearchTextHigher, setSearchTextHigher] = useState(
    "enter keywords to find movies higher"
  );
  const [Movies, setMovies] = useState(inititalMovies);

  const handleSearchTextHigher = event => {
    console.log(event);
    // console.log(event.target.value);
    setSearchTextHigher(event.target.value);
  };

  const handleMovieSearchHigher = event => {
    // console.log(event);
    if (SearchTextHigher) {
      const key = "bde60eb3d70191bf80d726a2da4ae238";
      const query = SearchTextHigher;
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then(res => {
        const movies = res.data;
        setMovies(movies);
      });
    }
    setSearchTextHigher("");
    event.preventDefault();
  };

  //   const onChangeTestHigher = dinges => {
  //     setTest(dinges);
  //   };

  return (
    <div>
      <header>
        <h1>React Netflix App</h1>
        {/* <p>You clicked {Movies[0]} times</p> */}
        {/* function for form needs to on form element */}
        <SearchBar
          Movies={Movies}
          SearchTextLower={SearchTextHigher}
          handleSearchTextHigher={handleSearchTextHigher}
          handleMovieSearchHigher={handleMovieSearchHigher}
        />
      </header>
      <main>
        <h2>Movies</h2>
        {/* <Results test={test} onChangeTestLower={onChangeTestHigher} /> */}
        <Results Movies={Movies} />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
export default Home;
