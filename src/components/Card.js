import React from "react";

function Card(props) {
  const movieData = props.movieData;
  console.log(movieData);
  console.log(movieData.title);
  return (
    <article>
      <h3 key={movieData.id}>{movieData.title}</h3>
      <p>{movieData.overview}</p>
    </article>
  );
}

export default Card;
