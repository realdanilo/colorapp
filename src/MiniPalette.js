import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

const MiniPalette = React.memo((props) => {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    openDialog,
    id,
    handleClick,
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
    <div className={classes.root} onClick={() => handleClick(id)}>
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
});
export default withStyles(styles)(MiniPalette);
