import React from "react";
import "../styles/Album.css";
import axios from "axios";
import App from "./App";
import Solo from "./IndiPic";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "normalize.css/normalize.css";
import { AST_Infinity } from "terser";

class Album extends React.Component {
  state = {
    albums: [],
    photos: [],
    albumName: ""
  };

  componentDidMount() {
    this.fetchPhotos();

    axios.get("/api/albums").then(resp => {
      this.setState({
        albums: resp.data
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchPhotos();
    }
  }
  fetchPhotos = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/albums/${id}?_embed=photos`).then(resp => {
      this.setState({
        albumName: resp.data.name,
        photos: resp.data.photos
      });
    });
  };

  render() {
    return (
      <div id="container">
        <header id="albumHeader">
          <Link to="/">
            <span id="albumArrow">
              <MaterialIcon icon="arrow_back" />
            </span>
          </Link>
          <h1>{this.state.albumName}</h1>
        </header>

        <main id="albumArea">
          {/* <section> */}
          <aside>
            <ul>
              {this.state.albums.map(album => (
                <Link key={"/album/" + album.id} to={"/ablum/"}>
                  <li>{album.name}</li>
                </Link>
              ))}
            </ul>
          </aside>
          {/* </section> */}
          {/* <section className="rows"> */}
          {this.state.photos.map(photo => (
            <Link to="/photo">
              <div className="picture">
                <div>
                  <img src={photo.photo} alt="pic" />
                </div>
                <div>
                  <p>{photo.name}</p>
                </div>
              </div>
            </Link>
          ))}
          {/* </section> */}
        </main>
      </div>
    );
  }
}
export default Album;
