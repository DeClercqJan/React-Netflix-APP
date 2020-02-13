import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import MoviesList from "./Results";

function Home() {
  const [moviesNowPlaying, setmoviesNowPlaying] = useState(null);

  // if (searchText2 !== "") {
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const FetchData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    ).then(res => {
      const moviesSearched = res.data;
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
      <h2>Home</h2>
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
