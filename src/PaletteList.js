import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
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

        {palettes.map((p, i) => (
          <MiniPalette key={i} {...p} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
