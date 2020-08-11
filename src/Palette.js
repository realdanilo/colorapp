import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 500,
      format: "hex",
    };
    this.changeSlider = this.changeSlider.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
  }
  changeSlider(newSlider) {
    this.setState({ slider: newSlider });
  }
  handleFormat(value) {
    this.setState({ format: value });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { slider, format } = this.state;
    const colorBoxes = colors[slider].map((color, i) => (
      <ColorBox
        key={i}
        colorId={color.id}
        background={color[format]}
        name={color.name}
        paletteId={id}
        showLink={true}
      />
    ));
    return (
      <div className="Palette">
        {/* Navbar */}
        <Navbar
          className="navbar"
          slider={slider}
          changeSlider={this.changeSlider}
          handleFormat={this.handleFormat}
        />
        {/* Color Boxes */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
        <footer className="Palette-footer">
          <p>{paletteName}</p>
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
