import React from "react";
import "../styles/IndiePic.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Solo extends React.Component {
  state = {
    name: "",
    url: "",
    albumId: "",
    left: "",
    right: ""
  };

  renderImage = id => {
    axios.get("/photos/" + id).then(resp => {
      this.setState({
        name: resp.data.name,
        url: resp.data.url,
        albumId: resp.data.albumId
      });
    });
  };

  componentDidMount() {
    this.renderImage(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.renderImage(newProps.match.params.id);
  }

  render() {
    return (
      <div id="container">
        <header>
          <h1>{this.state.name}</h1>
          <Link to={"/album/" + this.state.albumId}>&lt; Back to Album</Link>
        </header>
        <div className="photo">
          <img src={this.state.url} />
        </div>
      </div>
    );
  }
}
export default Solo;
