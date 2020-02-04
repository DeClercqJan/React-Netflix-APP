import React, { useState } from "react";
// import "./App.css";

function App() {
  // note: need to write this with starting capital letter (at the very least if you want to use it as a component)
  function GetMoviesSetState() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>test</p>
      <GetMoviesSetState/>
    </div>
  );
}
export default App;
