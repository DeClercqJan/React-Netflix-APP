import React, { Component, Fragment } from "react";
//  import { Link } from "react-router-dom";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

//  function SearchBar(props) {
// const searchText = props.searchText;

// const handleSearchText = event => {
//   props.handleSearchText(event);
// };

// const handleMovieSearch = event => {
//   props.handleMovieSearch(event);
//   //   props.handleUrlChangeOnSearch2();
//   event.preventDefault();
//   this.props.history.push({
//     pathname: "/movies"
//     // state: {
//     //   searchText: this.state.searchText
//     // }
//   });
// };

function HomeButton() {
  let history = useHistory();
  console.log(history);

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

class SearchBar extends Component {
  state = {
    searchText: ""
  };

  handleRoute = route => () => {
    console.log(history);
    this.props.history.push({ pathname: route });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "/results",
        state: {
          searchText: this.state.searchText
        }
      });
    } else {
      alert("Please enter some search text!");
    }
  };

  render() {
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
      <Fragment>
        <Form inline>
          <FormControl
            onChange={this.handleSearchInput}
            value={this.state.searchText}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button onClick={this.handleSearchSubmit} variant="outline-info">
            Search
          </Button>
        </Form>
        <HomeButton />
      </Fragment>
    );
  }
}

export default SearchBar;
