import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.handleFormat = this.handleFormat.bind(this);
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
  handleFormat(value) {
    this.setState({ format: value });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((c, i) => (
      <ColorBox key={i} name={c.name} background={c[format]} showLink={false} />
    ));
    return (
      <div className="Palette">
        <Navbar handleFormat={this.handleFormat} showingAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
