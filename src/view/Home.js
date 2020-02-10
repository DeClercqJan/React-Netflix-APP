import React, { useState, useEffect } from "react";
import Axios from "axios";
import SearchBar from "../components/Search";
import Results from "../view/Results";
import { BrowserRouter as Router } from "react-router-dom";

// import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

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

  const handleMovieSearchHigherWithRouter = withRouter(handleMovieSearchHigher);

  // suggested that I use this, but for what? Edit: at the moment it's handle to track re-renders
  useEffect(() => {
    console.log("use effect fires");
  });

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
          <ShowTheLocationWithRouter />
        </Router>
      </header>
      <main className="row">
        <h2 className="w-100">Movies</h2>
        <Router>
          <Results MoviesLower={MoviesHigher} />
        </Router>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default Home;
