import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import MoviesList from "../view/Results";
import ErrorBoundary from "../components/ErrorBoundary";

function SearchResultsPage(props) {
  console.log(props);
  // handles query parameter
  const searchTextRaw = props.location.search;
  const searchTextCleaned = searchTextRaw.substring(1);

  // const searchText2 = searchTextCleaned;
  const [searchText2, setSearchText2] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchResultsApiError, setSearchResultsApiError] = useState(false);
  const [searchResultsPage, setSearchResultsPage] = useState(null);
  const [searchResultsTotalPages, setSearchResultsTotalPages] = useState(null);

  useEffect(() => {
    setSearchText2(searchTextCleaned);
    // triggers on change in props
  }, [props]);

  // if (searchText2 !== "") {
  const key = "bde60eb3d70191bf80d726a2da4ae238";
  const query = searchText2;
  const FetchData = event => {
    console.log(event);
    console.log(String(event));
    //const page = event ? (page = event) : (page = "1");
    const page = event ? String(event) : "1";
    console.log(page);
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`
    )
      .then(res => {
        const moviesSearched = res.data;
        setSearchResults(moviesSearched);
        setSearchResultsPage(moviesSearched.page);
        setSearchResultsTotalPages(moviesSearched.total_pages);
        // setSearchResultsPage(parseInt(moviesSearched.page));
      })
      .catch(error => {
        console.log(error);
        // stole this from https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        setSearchResultsApiError(true);
      });
  };
  useEffect(() => {
    FetchData();
    // triggers only on change in searchText to prevent infinite loops
  }, [searchText2]);
  useEffect(() => {
    FetchData();
    // triggers only on change in searchText to prevent infinite loops
  }, [searchText2]);

  const nextPage = event => {
    console.log("next page button has been pressed");
    console.log(event.target.value);
    // FetchData(event.target.value);
    FetchData(parseInt(event.target.value) + 1);
  };
  const previousPage = event => {
    FetchData(parseInt(event.target.value) - 1);
  };

  return (
    <Fragment>
      {searchResultsPage !== null
        ? [
            searchResultsPage == 1 ? (
              <button value={searchResultsPage} onClick={nextPage}>
                next page
              </button>
            ) : (
              [
                searchResultsPage == searchResultsTotalPages ? (
                  <button value={searchResultsPage} onClick={previousPage}>
                    previous page
                  </button>
                ) : (
                  <Fragment>
                    <button value={searchResultsPage} onClick={previousPage}>
                      previous page
                    </button>
                    <button value={searchResultsPage} onClick={nextPage}>
                      next page
                    </button>
                  </Fragment>
                )
              ]
            )
          ]
        : null}
      <h2 className="w-100">Search results</h2>
      {searchResults ? (
        <ErrorBoundary>
          <MoviesList moviesList={searchResults} />
        </ErrorBoundary>
      ) : (
        [
          // note the comma
          <p>There has been an error</p>,
          searchResultsApiError ? (
            <p>
              : there was an error with getting the data from the database. Did
              you enter a search query?
            </p>
          ) : null
        ]
      )}
    </Fragment>
  );
}

export default SearchResultsPage;
