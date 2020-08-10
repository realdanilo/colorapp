import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadious: "5px",
    position: "relative",
    padding: ".5rem",
    margin: ".3rem",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "lightblue",
    },
  },
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    position: "relative",
    fontSize: "1rem",
  },
  emojiD: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};

function MiniPalette(props) {
  const { paletteName, emoji } = props;
  const { root, colors, title, emojiD } = props.classes;
  return (
    <div className={root}>
      <div className={colors}></div>
      <h5 className={title}>
        {paletteName} <span className={emojiD}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
