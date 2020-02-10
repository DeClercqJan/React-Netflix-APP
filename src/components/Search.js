import React from "react";
function SearchBar(props) {
  console.log(props);
  // confusing names? Well, I thought it made most sense to have props.lower as a name for something that is used at that level, while props.functionHigher is something that is moved up
  const SearchTextLower = props.SearchTextLower;

  const handleSearchTextLower = event => {
    props.handleSearchTextHigher(event);
  };

  const handleMovieSearchLower = event => {
    props.handleMovieSearchHigher(event);
    props.handleUrlChangeOnSearch2();
    event.preventDefault();
  };

  return (
    <nav className="w-100 navbar bg-dark">
      {/* function for form needs to on form element */}
      <form onSubmit={handleMovieSearchLower}>
        <input
          type="search"
          value={SearchTextLower}
          onChange={handleSearchTextLower}
        ></input>
        <button className="btn btn-info" type="submit">
          Click Me
        </button>
      </form>
    </nav>
  );
}

export default SearchBar;
