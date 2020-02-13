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

  return (
    <Fragment>
      <h2 className="w-100">Home</h2>
      {moviesNowPlaying ? (
        <Fragment>
          <MoviesList moviesList={moviesNowPlaying} />
        </Fragment>
      ) : (
        "foutje"
      )}
    </Fragment>
  );
}

export default Home;
