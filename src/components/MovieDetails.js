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

  let { movieID } = useParams();
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const fetchDataDetails = async () => {
    let response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieID};}?api_key=${key}&language=en-US`
    );
    let responseData = await response.data;
    setMovieSelected(responseData);
    // console.log(responseData);
  };
  const fetchDataTrailers = async () => {
    let response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${key}&language=en-US`
    );
    let responseData2 = await response.data;
    setMovieSelectedTrailers(responseData2);
    setYouTubeTrailerKey(responseData2.results[0].key);
    // console.log(responseData2);
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
      <p>Moviedetails</p>
      <p>{movieSelected.title}</p>

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
        "no trailer in first position of response. Probably a to do for the web developer(me)"
      )}
    </Fragment>
  );
};

export default MovieDetails;
