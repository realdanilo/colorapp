import React, { Component } from "react";
import ColorBox from "./ColorBox";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, colorId) {
    //return all shades of giving color
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((colorFilter) => colorFilter.id === colorId)
      );
    }
    //cut 50 bc is white
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((c, i) => (
      <ColorBox key={i} name={c.name} background={c.hex} showLink={false} />
    ));
    return (
      <div className="Palette">
        <p>cool boxes</p>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
