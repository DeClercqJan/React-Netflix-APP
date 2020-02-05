import React from "react";

function Card(props) {
  const movieDataLower = props.movieDataLower;
  return (
    <article>
      <h3 key={movieDataLower.id}>{movieDataLower.title}</h3>
      <p>{movieDataLower.overview}</p>
    </article>
  );
}

export default Card;
