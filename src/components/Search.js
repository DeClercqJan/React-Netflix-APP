import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBar() {
  // props.history gave error, potentially something to do with versioning. Documentation of react said to use useHistory, but that's a hook that can onyl be used within functions
  // therefore I adapted the example at https://codesandbox.io/s/inspiring-monad-h4o92?fontsize=14&module=%2Fsrc%2FMain.js to reflect a function logic
  let history = useHistory();

  const [searchText, setSearchText] = useState("");

  const handleSearchInput = event => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchText) {
      history.push({
        pathname: "/searchresultspage",
        search: searchText,
        // just a note
        state:
          "just putting something here to illustrate that this can also be done and much more"
      });
      setSearchText("");
    } else {
      alert("Please enter some search text!");
    }
  };

  const keyPressed = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      // console.log("test");
      // console.log(event);
      handleSearchSubmit();
    }
  };

  return (
    <form onKeyPress={keyPressed}>
      <input
        onChange={handleSearchInput}
        value={searchText}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        // onKeyPress={keyPressed}
      />
      {/* not sure what this React bootstrap element does, but it appears to do
      more than just style as replacing it with regular button tag kills
      functionality */}
      <Button onClick={handleSearchSubmit} variant="outline-info">
        Search
      </Button>
    </form>
  );
  // }
}

export default SearchBar;
