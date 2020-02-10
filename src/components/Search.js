import React, { useState } from "react";
//  import { Link } from "react-router-dom";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
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
      history.push("/hallo");
    } else {
      alert("Please enter some search text!");
    }
  };

  // to do: clean this up and remove react bootstrap stuff that I don't need
  return (
    // <Fragment>
    //   <form>
    //     <input
    //       onChange={this.handleSearchInput}
    //       value={this.state.searchText}
    //       type="text"
    //       placeholder="Search"
    //       className="mr-sm-2"
    //     />
    //     <button onClick={this.handleSearchSubmit} variant="outline-info">
    //       Search
    //     </button>
    //   </form>
    // </Fragment>
    <Form inline>
      <FormControl
        // onChange={this.handleSearchInput}
        // value={this.state.searchText}
        onChange={handleSearchInput}
        value={searchText}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button onClick={handleSearchSubmit} variant="outline-info">
        Search
      </Button>
    </Form>
  );
  // }
}

export default SearchBar;
