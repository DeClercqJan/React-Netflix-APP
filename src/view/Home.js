import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import MoviesList from "./Results";

function Home() {
  const [moviesNowPlaying, setmoviesNowPlaying] = useState(null);
  const [moviesNowPlayingApiError, setMoviesNowPlayingApiError] = useState(
    false
  );

  // if (searchText2 !== "") {
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const FetchData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    )
      .then(res => {
        const moviesSearched = res.data;
        setmoviesNowPlaying(moviesSearched);
      })
      .catch(error => {
        console.log(error);
        // stole this from https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        setMoviesNowPlayingApiError(true);
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
          <MoviesList moviesList={moviesNowPlaying} />
      ) : (
        [
          // note the comma
          <p>There has been an error</p>,
          moviesNowPlayingApiError ? (
            <p>: there was an error with getting the data from the database.</p>
          ) : null
        ]
      )}
    </Fragment>
  );
}

export default Home;
