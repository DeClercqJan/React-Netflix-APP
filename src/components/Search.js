import React, { useEffect } from "react";
import Card from "../components/Card";

function SearchBar(props) {
  // confusing names? Well, I thought it made most sense to have props.lower as a name for something that is used at that level, while props.functionHigher is something that is moved up
  const SearchTextLower = props.SearchTextLower;

  const handleSearchTextLower = event => {
    props.handleSearchTextHigher(event);
  };

  const handleMovieSearchLower = event => {
    console.log(event);
    console.log(event.target.value);
    props.handleMovieSearchHigher(event);
    event.preventDefault();
  };

  return (
    <nav>
      {/* function for form needs to on form element */}
      <form onSubmit={handleMovieSearchLower}>
        <input
          type="search"
          value={SearchTextLower}
          onChange={handleSearchTextLower}
        ></input>
        <button type="submit">Click Me</button>
      </form>
    </nav>
  );
}

export default SearchBar;
