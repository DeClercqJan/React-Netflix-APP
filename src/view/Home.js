import React from "react";
import SearchBar from "../components/Search";
// import "./App.css";

// fundamental remark: this would be way cooler if I configured it to represent my own preferences and in a click of a button I get a recommendation for how I'm feeling that moment (love sad, wanting to party etc.). Also, should not have seen the before

// note: need to write this with starting capital letter (at the very least if you want to use it as a component)
function Home() {
  return (
    <div>
      <header>
        <h1>React Netflix App</h1>
        {/* <p>You clicked {Movies[0]} times</p> */}
        {/* function for form needs to on form element */}
      </header>
      <main>
        <h2>Movies</h2>
        <SearchBar/>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
export default Home;
