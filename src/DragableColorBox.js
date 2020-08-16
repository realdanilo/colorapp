import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import sizes from "./styles/sizes";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
      marginBottom: "-4px",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
      marginBottom: "-4px",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "rgba(255,255,255,0.5)",
    transition: ".5s all ease-out",
    "&:hover ": {
      color: "white",
    },
  },
};
const DragableColorBox = SortableElement((props) => {
  const { classes, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name} </span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DragableColorBox);
