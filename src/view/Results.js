import React, { Fragment } from "react";
import Card from "../components/Card";

function Results(props) {
  const MoviesLower = props.MoviesLower;
  const moviesListUnformated = MoviesLower.results;
  const moviesListFormated = moviesListUnformated.map(movieDataHigher => {
    return <Card movieDataLower={movieDataHigher} />;
  });
  return moviesListFormated;
}
export default Results;
