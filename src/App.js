import React, { useState } from "react";
// import Axios from "axios";
// import "./App.css";

function App() {
  // note: need to write this with starting capital letter (at the very least if you want to use it as a component)
  function GetMovies() {
    // Declare a new state variable, which we'll call "count"
    // const [Movies, setMovies] = useState([]);
    const [Search, setSearch] = useState("no movie searched");

    const handleChange = event => {
      console.log(event.target.value);
      setSearch(event.target.value);
    };

/*     const handleMovieSearch = event2 => {
      // console.log(Search);
      console.log(event2);
      Axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=bde60eb3d70191bf80d726a2da4ae238`
      ).then(res => {
        const movies = res.data;
        setMovies(movies);
      });
      event2.preventDefault();
    }; */

    return (
      <div>
        {/* <p>You clicked {Movies[0]} times</p> */}
        {/* function for form needs to on form element */}
        {/* <form onSubmit={handleMovieSearch}> */}
        <input type="search" value={Search} onChange={handleChange}></input>
        {/* <input type="submit">Click me</input> */}
        {/* </form> */}
      </div>
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
