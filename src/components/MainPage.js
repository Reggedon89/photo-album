import React from "react";
import "../styles/MainPage.css";
import Album from "./Album";
import Axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {
  state = {
    albums: []
  };

  componentDidMount() {
    Axios.get("/api/albums").then(resp => {
      this.setState({
        albums: resp.data
      });
    });
  }
  render() {
    return (
      <div id="container">
        <header id="mainHeader">
          <h1>Super Heroes</h1>
        </header>

        <main id="albumArea">
          {this.state.albums.map(album => (
            <Link key={"album-link-" + album.id} to="/album/">
              <div className="albumWrapper">
                <div className="indieAlbum">
                  <img src={album.url} />
                  <div className="albumTitle">
                    <span className="title">{album.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    );
  }
}

export default Main;
