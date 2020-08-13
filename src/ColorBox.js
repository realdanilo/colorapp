import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  isLight: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0,0,0,.9)"
        : "rgba(255,255,255,0.8)",
  },
};
// isLight && "dark-text"
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const {
      name,
      background,
      paletteId,
      colorId,
      showLink,
      classes,
    } = this.props;
    let { copied } = this.state;

    return (
      <div style={{ backgroundColor: background }} className="ColorBox">
        <div
          style={{ backgroundColor: background }}
          className={`copy-overlay ${copied && "show"} `}
        ></div>
        <div className={`copy-message ${copied && "show"} `}>
          <h1>Copied!</h1>
          <p className={classes.isLight}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={classes.isLight}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className={`copy-button ${classes.isLight}`}>Copy</button>
          </CopyToClipboard>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`see-more ${classes.isLight}`}>More</span>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
