import React from "react";
import "../styles/MainPage.css";

class Main extends React.Component {
  render() {
    return (
      <div id="container">
        <header id="mainHeader">
          <h1>My Albums</h1>
        </header>
        <main id="albumArea">
          <div className="albumWrapper">
            <div className="indieAlbum">
              <div className="albumTitle">
                <span className="title">Album Title</span>
              </div>
            </div>
            <div className="indieAlbum">
              <div className="albumTitle">
                <span className="title">Album Title</span>
              </div>
            </div>
          </div>
          <div className="albumWrapper">
            <div className="indieAlbum">
              <div className="albumTitle">
                <span className="title">Album Title</span>
              </div>
            </div>

            <div className="indieAlbum">
              <div className="albumTitle">
                <span className="title">Album Title</span>
              </div>
            </div>
          </div>
          <div className="albumWrapper">
            <div className="indieAlbum">
              <div className="albumTitle">
                <span className="title">Album Title</span>
              </div>
            </div>
            <div className="indieAlbum">
              <div className="albumTitle">
                <span className="title">Album Title</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
