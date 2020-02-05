import React from "react";

function Card(props) {
  const movieDataLower = props.movieDataLower;
  console.log(movieDataLower);
  return (
    <article>
      <h3 key={movieDataLower.id}>{movieDataLower.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDataLower.poster_path}`}
      ></img>
      <p>{movieDataLower.overview}</p>
    </article>
  );
}

export default Card;
