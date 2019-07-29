import React, { Component } from "react";
import "../styles/MainPage.css";

import axios from "axios";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    axios.get("/api/albums").then(resp => {
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
            <Link to={"/album/" + album.id}>
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
