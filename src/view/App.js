import React, { Component } from "react";
// import Navbar from './components/Navbar'
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
// import About from './components/About'
// import Contact from './components/Contact'
import SearchBar from "../components/Search";
import MoviesList from "../components/Results";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="row">
          <h1 className="w-100">React Netflix App</h1>
          {/* <SearchBar
        // confusing names? Well, I thought it made most sense to have props.lower as a name for something that is used at that level, while props.functionHigher is something that is moved up
        SearchTextLower={SearchTextHigher}
        handleSearchTextHigher={handleSearchTextHigher}
        handleMovieSearchHigher={handleMovieSearchHigher}
        /> */}
          <BrowserRouter>
            <SearchBar />
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={MoviesList} />
          </BrowserRouter>
        </header>
        <main className="row">
          {/* <h2 className="w-100">Movies</h2>
      <Router>
        <Results MoviesLower={MoviesHigher} />
      </Router> */}
        </main>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
