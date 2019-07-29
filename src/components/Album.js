import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import "../styles/Album.css";

class Album extends Component {
  state = {
    albumName: "",
    images: [],
    albums: []
  };

  componentDidMount() {
    axios
      .get("/api/albums/" + this.props.match.params.id + "?_embed=photos")
      .then(resp => {
        this.setState({
          albumName: resp.data.name,
          images: resp.data.photos
        });
      });

    axios.get("/api/albums").then(resp => {
      this.setState({
        albums: resp.data
      });
    });
  }

  componentWillReceiveProps(newProps) {
    axios
      .get("/api/albums/" + newProps.match.params.id + "?_embed=photos")
      .then(resp => {
        this.setState({
          albumName: resp.data.name,
          images: resp.data.photos
        });
      });
  }

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
        <div className="albumWrapper">
          <aside id="albumList">
            <ul>
              {this.state.albums.map(album => (
                <li>
                  <Link to={"/album/" + album.id}>{album.name}</Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className="photoList">
            {this.state.images.map(photo => (
              <Link className="photoLink" to={"/IndiPic/" + photo.id}>
                <img src={photo.url} />
                <h3>{photo.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
