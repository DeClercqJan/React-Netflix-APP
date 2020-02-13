import React, { useState, useEffect, Fragment } from "react";
// import ApiData from "../API";
// import { useLocation, useHistory } from "react-router-dom";
import Axios from "axios";
import MoviesList from "../view/Results";

function SearchResultsPage(props) {
  console.log(props);
  // handles query parameter
  const searchTextRaw = props.location.search;
  const searchTextCleaned = searchTextRaw.substring(1);

  // const searchText2 = searchTextCleaned;
  const [searchText2, setSearchText2] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchText2(searchTextCleaned);
    // triggers on change in props
  }, [props]);

  // if (searchText2 !== "") {
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const query = searchText2;
  const FetchData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
    ).then(res => {
      const moviesSearched = res.data;
      setSearchResults(moviesSearched);
    });
  };
  useEffect(() => {
    FetchData();
    // triggers only on change in searchText to prevent infinite loops
  }, [searchText2]);

  return (
    <Fragment>
      <h2 className="w-100">Search results</h2>
      {searchResults ? (
        <Fragment>
          <MoviesList moviesList={searchResults} />
        </Fragment>
      ) : (
        "je moet eerst searchen"
      )}
    </Fragment>
  );
}

export default SearchResultsPage;
