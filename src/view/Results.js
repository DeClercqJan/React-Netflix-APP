import React, { Fragment } from "react";
import Card from "../components/Card";
// import Card from "../components/Card";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link,
//   // useRouteMatch,
//   useParams
//   // withRouter
// } from "react-router-dom";
// import Axios from "axios";

// function Results(props) {
//   // let match = useRouteMatch();

//   //   // methodology note: I have opted to use another API-call as I preferessed this over pushing the state up from moviesListFormated to shared state in order to use in this component
//   const MovieDetails = () => {
//     const [movieSelected, setMovieSelected] = useState([]);
//     let { movieID } = useParams();
//     const key = "bde60eb3d70191bf80d726a2da4ae238";
//     const fetchData = async () => {
//       let response = await Axios.get(
//         `https://api.themoviedb.org/3/movie/${movieID};}?api_key=${key}&language=en-US`
//       );
//       let responseData = await response.data;
//       setMovieSelected(responseData);
//       console.log(responseData);
//     };
//     useEffect(() => {
//       fetchData();
//     }, []);
//     return <p>{movieSelected.title}</p>;
//   };

function MoviesList(props) {
  console.log(props);
  const moviesList = props.moviesList;
  const moviesListUnformated = moviesList.results;
  const moviesListFormated = moviesListUnformated.map(movieData => {
    return <Card movieData={movieData} />;
  });
  return (
    <Fragment>
      <p>MoviesList has been returned</p>
      {moviesListFormated}
    </Fragment>
  );
}

//   return (
//     <Router>
//       <Switch>
//         {/* <Route exact path={`${match.path}/search`}> */}
//         <Route exact path={`/movies`} component={MoviesList}>
//           {/* {moviesListFormated} */}
//         </Route>
//         <Route path={`/movies/:movieID`} component={MovieDetails} />
//         {/* <Route path={`/movies/:movieID`}> */}
//         {/* <MovieDetails /> */}
//         {/* </Route> */}
//       </Switch>
//     </Router>
//   );
// }

//export default Results;
export default MoviesList;
