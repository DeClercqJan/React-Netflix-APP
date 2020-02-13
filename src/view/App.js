import React from "react";
// import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
// import About from './components/About'
// import Contact from './components/Contact'
import SearchBar from "../components/Search";
import MoviesList from "./Results";
// import Axios from "axios";
import SearchResultsPage from "../components/SearchResultsPage";
import MovieDetails from "../components/MovieDetails";

// class App extends Component {
// this gets popular movies, yet not sure how this plays out if I use hooks for searches etc.
// componentDidMount() {
//   console.log("app did mount");
//   const fetchData = async () => {
//     //     const key = "bde60eb3d70191bf80d726a2da4ae238";
//     let response = await Axios.get(
//       `https://api.themoviedb.org/3/movie/now_playing?api_key=bde60eb3d70191bf80d726a2da4ae238&language=en-US&page=1`
//     );
//     let responseData = await response.data;
//     console.log(responseData);
//   };
//   //     return <p>{movieSelected.title}</p>;
//   fetchData();
// }
//  render() {

function App(props) {
  // handleRoute = route => () => {
  //   this.props.history.push({ pathname: route });
  // };

  // handleSearchInput = event => {
  //   this.setState({
  //     searchText: event.target.value
  //   });
  // };

  // const [searchText, setSearchText] = useState("");

  // const handleSearchText = event => {
  //   setSearchText(event.target.value);
  // };

  // const handleMovieSearch = (event) => {
  //   if (searchText) {
  //     const key = "bde60eb3d70191bf80d726a2da4ae238";
  //     const query = searchText;
  //     Axios.get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  //     ).then(res => {
  //       const moviesSearched = res.data;
  //       console.log(moviesSearched);
  //       setSearchText(moviesSearched);
  //     });
  //   }
  //    event.preventDefault();
  // };

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="row">
          <h1 className="w-100">React Netflix App</h1>
          {/* <SearchBar
        // confusing names? Well, I thought it made most sense to have props.lower as a name for something that is used at that level, while props.functionHigher is something that is moved up
        SearchTextLower={SearchTextHigher}
        handleSearchTextHigher={handleSearchTextHigher}
        handleMovieSearchHigher={handleMovieSearchHigher}
        /> */}
          {/* <SearchBar
            handleSearchText={handleSearchText}
            handleMovieSearch={handleMovieSearch}
          />
          <Route exact path="/" component={Home} />
          
          <Route path="/movies" component={MoviesList} /> */}

          {/* QUESTION: why does Searchbar need to be in the router? */}
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
            {/* <Route component={RouteNotFound} /> */}
            <Route exact path="/movies" component={MoviesList} />
            <Route
              path="/searchresultspage"
              render={props => <SearchResultsPage {...props} />}
            />
            <Route path="/movies/:movieID" component={MovieDetails} />
          </Switch>
          {/* <h2 className="w-100">Movies</h2>
      <Router>
        <Results MoviesLower={MoviesHigher} />
      </Router> */}
        </main>
        <footer>
          <p>footer</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
