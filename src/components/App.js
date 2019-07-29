import React, { Component } from "react";
import axios from "axios";
import Main from "./MainPage";
import Album from "./Album";
import Solo from "./IndiPic";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/album/:id" component={Album} />
          <Route path="/indiPic/:id" component={Solo} />
        </Router>
      </div>
    );
  }
}

export default App;
