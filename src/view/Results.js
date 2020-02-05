import React, { Fragment } from "react";
import Card from "../components/Card";

function Results(props) {
  const Movies2 = props.Movies;
  console.log(Movies2);
  // console.log({ Movies });
  const moviesListUnformated = Movies2;
  // console.log(moviesListUnformated);
  // console.log(moviesListUnformated.Movies.results);
  const moviesListUnformated2 = moviesListUnformated.results;
  // console.log(moviesListUnformated2);
  const moviesListFormated = moviesListUnformated2.map(movieUnformated => {
    // console.log(movieUnformated.title);
    // console.log(movieUnformated);
    return <Card movieData={movieUnformated} />;
  });
  // console.log(moviesListFormated);
  return moviesListFormated;
  // return moviesListUnformated.Movies.results[0].title;

  //   const testje = props.test;
  // console.log(testje);
  //   const handleChange = event => {
  //     console.log(event.target.value);
  //     props.onChangeTestLower(event.target.value);
  //   };
  //   return (
  //     <Fragment>
  //   {/* <p>{testje}</p>
  //   <input onChange={handleChange}></input> */}
  // </Fragment>
  //  );
}
export default Results;
