import React from "react";
import ReactDOM from "react-dom";
// import Home from './view/Home';
import AppWithRouter from "./view/Home";
import "./index.css";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

ReactDOM.render(
  //  <Home/>,
  <Router>
  <AppWithRouter />
  </Router>,
  document.getElementById("root")
);
