import React from "react";
import "../styles/Album.css";
import { AST_Infinity } from "terser";

class Album extends React.Component {
  render() {
    return (
      <div id="container">
        <header id="albumHeader">
          <h1>My Albums</h1>
        </header>

        <main id="albumArea">
          <aside id="albumList">
            <ul>
              <li>Album</li>
              <li>Album</li>
              <li>Album</li>
              <li>Album</li>
              <li>Album</li>
              <li>Album</li>
            </ul>
          </aside>
          <div className="albumWrapper">
            <div className="indieAlbum">
              <div className="pictureTitle">
                <span className="title">Picture Title</span>
              </div>
            </div>
            <div className="indieAlbum">
              <div className="pictureTitle">
                <span className="title">Picture Title</span>
              </div>
            </div>
          </div>
          <div className="albumWrapper">
            <div className="indieAlbum">
              <div className="pictureTitle">
                <span className="title">Picture Title</span>
              </div>
            </div>

            <div className="indieAlbum">
              <div className="pictureTitle">
                <span className="title">Picture Title</span>
              </div>
            </div>
          </div>
          <div className="albumWrapper">
            <div className="indieAlbum">
              <div className="pictureTitle">
                <span className="title">Picture Title</span>
              </div>
            </div>
            <div className="indieAlbum">
              <div className="pictureTitle">
                <span className="title">Picture Title</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Album;
