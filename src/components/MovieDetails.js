import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = props => {
  console.log(props);
  // for some reason, useState initial value must be [] ...
  const [movieSelected, setMovieSelected] = useState([]);
  const [movieSelectedTrailers, setMovieSelectedTrailers] = useState([]);
  // const [count, setCount] = useState(0);
  const [youTubeTrailerKey, setYouTubeTrailerKey] = useState(null);
  const [movieDetailsApiError, setMovieDetailsApiError] = useState(false);

  let { movieID } = useParams();
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const fetchDataDetails = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieID};}?api_key=${key}&language=en-US`
    )
      .then(res => {
        const responseData = res.data;
        setMovieSelected(responseData);
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
        setMovieDetailsApiError(true);
      });
  };
  const fetchDataTrailers = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${key}&language=en-US`
    )
      .then(res => {
        const responseData2 = res.data;
        setMovieSelectedTrailers(responseData2);
        setYouTubeTrailerKey(responseData2.results[0].key);
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
        setMovieDetailsApiError(true);
      });
  };
  useEffect(() => {
    fetchDataDetails();
    fetchDataTrailers();
    // setCount(count + 1);
  }, []);

  // const findYoutubeData = name => {
  //   return name.site === "YouTube";
  // };

  // useEffect(() => {
  //   console.log("second useEffect fires as moviesSelectedTrailers has changed");
  //   console.log(youTubeTrailer);
  //   console.log(movieSelectedTrailers);
  //   const movieSelectedTrailersArray = movieSelectedTrailers.results;
  //   const youTubeData = movieSelectedTrailersArray.find(findYoutubeData);
  //   console.log(youTubeData);
  // }, [count]);
  // // }, [movieSelectedTrailers]);

  //api.themoviedb.org/3/movie/5/videos?api_key=bde60eb3d70191bf80d726a2da4ae238&language=en-US

  //     return <p>{movieSelected.title}</p>;
  return (
    <Fragment>
      <h2 className="w-100">{movieSelected.title}</h2>
      {youTubeTrailerKey ? (
        <iframe
          width="1521"
          height="602"
          src={`https://www.youtube.com/embed/${youTubeTrailerKey}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        [
          // note the comma
          <p>There has been an error</p>,
          movieDetailsApiError ? (
            <p>: there was an error with getting the data from the database.
              Perhaps there was no YouTube trailer available (in the first
              positoin of the response). Something to do for the developer (me)
            </p>
          ) : null
        ]
      )}
    </Fragment>
  );
};

export default MovieDetails;
