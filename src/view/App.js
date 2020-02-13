import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import SearchBar from "../components/Search";
// import MoviesList from "./Results";
import SearchResultsPage from "../components/SearchResultsPage";
import MovieDetails from "../components/MovieDetails";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="row">
          <h1 className="w-100">React Netflix App</h1>
          <NavBar/>
          <SearchBar />
        </header>
        <main className="row">
        <Switch>
            <Route exact path="/" component={Home} location={location} />
            <Route
              exact
              path="/results"
              component={SearchResultsPage}
              location={location}
            />
            {/* <Route exact path="/movies" component={MoviesList} /> */}
            <Route
              path="/searchresultspage"
              render={props => <SearchResultsPage {...props} />}
            />
            <Route path="/movies/:movieID" component={MovieDetails} />
          </Switch>
        </main>
        <footer>
          <p>footer</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
