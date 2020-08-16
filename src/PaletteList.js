import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import sizes from "./styles/sizes";
import background from "./styles/bg.svg";
const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#164aaa",
    backgroundImage: `url(${background})`,
    // background by SVGbackgrounds.com
    overflowY: "scroll",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flewWrap: "wrap",
    [sizes.down("md")]: {
      width: "80%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& h1": {
      fontSize: "30px",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "rgba(255,255,255,0.8)",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    maxHeight: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
      width: "70%",
      justifyContent: "center",
      margin: "0 auto",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1rem",
    },
  },
};
class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, handleDelete } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((p, i) => (
              <MiniPalette
                key={i}
                {...p}
                handleClick={() => this.goToPalette(p.id)}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
