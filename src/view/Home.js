import React, { useState } from "react";
import SearchBar from "../components/Search";
import Results from "../view/Results";
// import "./App.css";

// fundamental remark: this would be way cooler if I configured it to represent my own preferences and in a click of a button I get a recommendation for how I'm feeling that moment (love sad, wanting to party etc.). Also, should not have seen the before

// note: need to write this with starting capital letter (at the very least if you want to use it as a component)
function Home() {
  const [test, setTest] = useState("test pushing data up using hooks");
  const onChangeTestHigher = temperature => {
    setTest(temperature);
  };

  return (
    <div>
      <header>
        <h1>React Netflix App</h1>
        {/* <p>You clicked {Movies[0]} times</p> */}
        {/* function for form needs to on form element */}
        <SearchBar />
      </header>
      <main>
        <h2>Movies</h2>
        <Results test={test} onChangeTestLower={onChangeTestHigher} />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
export default Home;
