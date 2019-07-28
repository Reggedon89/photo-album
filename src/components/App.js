import React from "react";
import axios from "axios";
import Main from "./MainPage";
import Album from "./Album";
import Solo from "./IndiPic";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "../styles/App.css";

class App extends React.Component {
  // componentDidMount() {
  //   axios.get("/api/example").then(resp => {
  //     console.log(resp.data);
  //   });
  // }

  render() {
    return (
      <div id="container">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/Album" component={Album} />
          <Route path="/IndiPic" component={Solo} />
        </Router>
      </div>
    );
  }
}

export default App;
