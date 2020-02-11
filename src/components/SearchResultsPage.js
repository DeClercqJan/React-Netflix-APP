import React, { useState, useEffect, Fragment } from "react";
// import ApiData from "../API";
// import { useLocation, useHistory } from "react-router-dom";
import Axios from "axios";
import MoviesList from "./Results";

function SearchResultsPage(props) {
  console.log(props);
  // console.log(props.location);
  // console.log(props.location.search);
  const searchTextRaw = props.location.search;
  const searchTextCleaned = searchTextRaw.substring(1);
  console.log(searchTextCleaned);
  // console.log(ApiData);
  // console.log(useLocation);
  // console.log(useHistory);

  // const searchText2 = searchTextCleaned;
  const [searchText2, setSearchText2] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  console.log(searchResults);

  useEffect(() => {
    setSearchText2(props.location.search);
    // console.log("useEffect triggers on change in searchTextRaw");
  }, [props]);

  // if (searchText2 !== "") {
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const query = searchText2;
  const FetchData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
    ).then(res => {
      const moviesSearched = res.data;
      //console.log(moviesSearched.results[0].title);
      setSearchResults(moviesSearched);
    });
  };
  useEffect(() => {
    FetchData();
    // this [] is important to prevent infinit loops
  }, [searchText2]);
  // }
  // event.preventDefault();

  return (
    <Fragment>
      <p>{searchText2}</p>
      <br />
      {searchResults ? (
        <Fragment>
          <p>{`de titel van de eerste gezochtfilm is ${searchResults.results[0].title}`}</p>
          <MoviesList moviesList={searchResults} />
        </Fragment>
      ) : (
        "je moet eerst searchen"
      )}
    </Fragment>
  );

  // const [searchText, setSearchText] = useState("");

  // const handleSearchText = event => {
  //   setSearchText(event.target.value);
  // };

  // export default class SearchResultsPage extends React.Component {
  // state = {
  //   isLoading: true,
  //   searchText: "",
  //   searchResults: []
  // };

  // handleSearch = () => {
  //   console.log(ApiData);
  //   // let searchText = this.props.location.state.searchText;
  //   // let results = ApiData.filter(item => item.title.includes(searchText));
  //   this.setState({
  //     // isLoading: false,
  //     // searchText: searchText,
  //     // searchResults: results
  //   });
  // };

  // componentDidMount() {
  //   this.handleSearch();
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps);
  //   // let prevSearch = prevProps.locati
  //   // let newSearch = this.props.location.state.searchText;
  //   // if (prevSearch !== newSearch) {
  //   //   this.handleSearch();
  //   // }
  // }

  // render() {
  //   let toRender = this.state.isLoading ? (
  //     <h1>Loading...</h1>
  //   ) : (
  //     // <>
  //     <Fragment>
  //       <h1>Your Search Results</h1>
  //       <ul>
  //         {/* <li>Search: "{this.state.searchText}"</li>
  //         <li>Count: {this.state.searchResults.length}</li> */}
  //       </ul>
  //       {this.state.searchResults.length > 0 ? (
  //         <pre>
  //           <small>{JSON.stringify(this.state.searchResults, null, 2)}</small>
  //         </pre>
  //       ) : (
  //         <p>NO RESULTS FOUND</p>
  //       )}
  //     </Fragment>
  //   );

  //   return (
  //     <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>
  //     // return <p>searchresultpage return</p>;
  //   );
  // }
}

export default SearchResultsPage;
