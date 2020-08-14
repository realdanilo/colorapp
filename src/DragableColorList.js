import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from "./DragableColorBox";

const DragableColorList = SortableContainer((props) => {
  return (
    <div style={{ height: "100%" }}>
      {props.colors.map((color, i) => (
        <DragableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => props.removeColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DragableColorList;
