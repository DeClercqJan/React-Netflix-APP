import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  useRouteMatch
  // useParams
} from "react-router-dom";
// import { BrowserRouter as Link } from "react-router-dom";

function Card(props) {
  const movieDataLower = props.movieDataLower;
  // console.log(movieDataLower);
  return (
    <article
      key={movieDataLower.id}
      className="col-3"
      style={{ height: "40rem" }}
    >
      <div className="card text-center" style={{ height: "90%" }}>
        <div style={{ height: "50%" }}>
          <img
            className="card-img-top"
            style={{ "object-fit": "contain" }}
            src={`https://image.tmdb.org/t/p/w500${movieDataLower.poster_path}`}
            alt="Card image cap"
          />
        </div>
        <div className="card-body" style={{ height: "50%" }}>
          <h3 className="card-title" style={{ height: "20%" }}>
            {movieDataLower.title}
          </h3>
          <p
            className="card-text"
            style={{ height: "50%", overflow: "scroll" }}
          >
            {movieDataLower.overview}
          </p>
          {/* <Link to={`/${movieDataLower.id}`}>Products</Link> */}
          <a
            href={`/${movieDataLower.id}`}
            className="btn btn-primary"
            style={{ height: "15%", marginBottom: "15%" }}
          >
            Go somewhere
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
