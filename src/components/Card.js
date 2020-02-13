import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const movieData = props.movieData;
  return (
    <article key={movieData.id} className="col-3" style={{ height: "40rem" }}>
      <div className="card text-center" style={{ height: "90%" }}>
        <div style={{ height: "50%" }}>
          <img
            className="card-img-top"
            style={{ objectFit: "contain" }}
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
        <div className="card-body" style={{ height: "50%" }}>
          <h3 className="card-title" style={{ height: "20%" }}>
            {movieData.title}
          </h3>
          <p
            className="card-text"
            style={{ height: "50%", overflow: "scroll" }}
          >
            {movieData.overview}
          </p>
          <Link to={`/movies/${movieData.id}`}>See trailer and details</Link>
        </div>
      </div>
    </article>
  );
}

export default Card;
