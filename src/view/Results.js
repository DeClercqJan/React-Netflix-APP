import React, { useState, Fragment } from "react";
import Card from "../components/Card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Axios from "axios";

function Results(props) {
  let match = useRouteMatch();

  const MoviesLower = props.MoviesLower;
  const moviesListUnformated = MoviesLower.results;
  const moviesListFormated = moviesListUnformated.map(movieDataHigher => {
    return (
      <Fragment>
        <Card movieDataLower={movieDataHigher} />
        <Link to={`${match.url}/${movieDataHigher.id}`}>
          {movieDataHigher.id}
        </Link>
      </Fragment>
    );
  });

  return (
      <Router>
      <Switch>
        <Route exact path={match.path}>
          {moviesListFormated}
        </Route>
        <Route path={`${match.path}/:movieID`}>
          <MovieDetails/>
        </Route>
      </Switch>
      </Router>
  );

  function MovieDetails() {
    // methodology note: I have opted to use another API-call as I preferessed this over pushing the state up from moviesListFormated to shared state in order to use in this component
    const [movieSelected, setMovieSelected] = useState([]);
    let { movieID } = useParams();
    const key = "bde60eb3d70191bf80d726a2da4ae238";
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieID};}?api_key=${key}&language=en-US`
    ).then(res => {
      const movie = res.data;
      setMovieSelected(movie);
    });
    return (
      <p>
        Requested topic ID: {movieID} = {movieSelected.title}
      </p>
    );
  }
}

export default Results;
