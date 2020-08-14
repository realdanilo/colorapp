import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
// dragable comp
import DragableColorList from "./DragableColorList";
import arrayMove from "array-move";

// material ui
const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  static defaultProps = {
    max: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: this.props.palettes[0].colors,
    };
  }

  savePalette = (newPaletteName) => {
    let newPalette = {
      paletteName: newPaletteName,
      colors: this.state.colors,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };
  clearColors = () => {
    this.setState({ colors: [] });
  };
  addRandomColor = () => {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState((st) => ({
      colors: [...st.colors, randomColor],
    }));
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addNewColor = (newColor) => {
    this.setState((st) => ({
      colors: [...st.colors, newColor],
    }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  removeColor = (colorName) => {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
  render() {
    const { classes, max, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = max === colors.length;
    return (
      <div className={classes.root}>
        {/* Navbar goes here */}
        <PaletteFormNav
          classes={classes}
          open={open}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design your Palette</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearColors}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={this.addNewColor}
            colors={colors}
          />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <DragableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);

// export default NewPaletteForm;
