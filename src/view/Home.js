import React, { useState, useEffect } from "react";
import Axios from "axios";
import SearchBar from "../components/Search";
import Results from "../view/Results";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import "./App.css";

// fundamental remark: this would be way cooler if I configured it to represent my own preferences and in a click of a button I get a recommendation for how I'm feeling that moment (love sad, wanting to party etc.). Also, should not have seen the before

// note: need to write this with starting capital letter (at the very least if you want to use it as a component)
function Home() {
  const [SearchTextHigher, setSearchTextHigher] = useState(
    "enter keywords to find movies higher"
  );

  const handleSearchTextHigher = event => {
    setSearchTextHigher(event.target.value);
  };

  const inititalMovies = {
    results: [
      {
        id: 0,
        title: "Movie1"
      }
    ]
  };

  const [MoviesHigher, setMoviesHigher] = useState(inititalMovies);

  const handleMovieSearchHigher = event => {
    if (SearchTextHigher) {
      const key = "bde60eb3d70191bf80d726a2da4ae238";
      const query = SearchTextHigher;
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then(res => {
        const movies = res.data;
        setMoviesHigher(movies);
      });
    }
    setSearchTextHigher("");
    event.preventDefault();
  };

  // suggested that I use this, but for what? Couple of ideas: new api-request with every letter typed in search (probably a bad idea)
  useEffect(() => {
    console.log("use effect fires");
  });

  function MovieDetails() {
    console.log("movieDetails functies firet");
    const dummy = MoviesHigher.results[0].id;
    console.log(dummy);
    return dummy;
    // return (<p>testje Moviedetails</p>);
  }

  function TestParameters() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }

  return (
    <div className="container-fluid">
      <header className="row">
        <h1 className="w-100">React Netflix App</h1>
        <SearchBar
          // confusing names? Well, I thought it made most sense to have props.lower as a name for something that is used at that level, while props.functionHigher is something that is moved up
          SearchTextLower={SearchTextHigher}
          handleSearchTextHigher={handleSearchTextHigher}
          handleMovieSearchHigher={handleMovieSearchHigher}
        />
        <Router>
          <Link to="/movieDetails">Movie details</Link>
          <Link to="/moviesList">List of movies</Link>
          <Link to="/testParameters">testParameters</Link>
          <Switch>
            <Route path="/movieDetails">
              <MovieDetails />
            </Route>
          </Switch>
          <Switch>
            <Route path="/moviesList">
              <Results MoviesLower={MoviesHigher} />
            </Route>
            <Route path="/testParameters">
              <TestParameters/>
            </Route>
          </Switch>
        </Router>
      </header>
      <main className="row">
        <h2 className="w-100">Movies</h2>
        {/* <Results MoviesLower={MoviesHigher} /> */}
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default Home;
