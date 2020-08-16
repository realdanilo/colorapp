import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
const styles = {
  root: {
    backgroundColor: "white",
    margin: "0",
    marginBottom: "-10px",
    border: "1px solid black",
    borderRadius: "5px",
    position: "relative",
    padding: ".5rem",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#daed184",
    height: "100px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
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
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
  },
  delete: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "20%",
    height: "20%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    maxHeight: "30px",
    maxWidth: "30px",

    opacity: 0,
    transition: ".5s opacity ease",
  },
};

function MiniPalette(props) {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    handleDelete,
    openDialog,
    id,
  } = props;
  const MiniColorBoxes = colors.map((c, i) => (
    <div
      key={i}
      className={classes.miniColor}
      style={{ backgroundColor: c.color }}
    ></div>
  ));
  function DeletePalette(e) {
    e.stopPropagation();
    openDialog(id);
  }
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{MiniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={(e) => DeletePalette(e)}
        />
      </div>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
