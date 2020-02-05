import React, { useEffect } from "react";
import Card from "../components/Card";

function SearchBar(props) {
  // console.log(props);
  const SearchTextLower = props.SearchTextLower;
  // console.log(Movies2);

  /*   const [SearchText, setSearchText] = useState(
    "enter keywords to find movies lower"
  );
 */
  const handleSearchTextLower = event => {
    // console.log(event.target.value);
    // setSearchText(event.target.value);
    props.handleSearchTextHigher(event);
  };

  // suggested that I use this, but for what? Couple of ideas: new api-request with every letter typed in search (probably a bad idea)
  useEffect(() => {
    console.log("use effect fires");
  });

  const handleMovieSearchLower = event => {
    console.log(event);
    console.log(event.target.value);
    props.handleMovieSearchHigher(event);
    event.preventDefault();
  };

  return (
    <nav>
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
