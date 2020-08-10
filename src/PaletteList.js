import React, { Component } from "react";
import { Link } from "react-router-dom";
class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h2>Color App</h2>
        {palettes.map((p) => (
          <p>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
