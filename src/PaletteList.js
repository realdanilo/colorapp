import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import sizes from "./styles/sizes";
import background from "./styles/bg.svg";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
//transition
import {
  Transition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity .5s ease-out",
    },
  },
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
    this.state = {
      dialog: false,
      deletingId: "",
    };
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  openDialog = (id) => {
    this.setState({ dialog: true, deletingId: id });
  };
  closeDialog = () => {
    this.setState({ dialog: false });
  };
  confirmDelete = () => {
    this.props.handleDelete(this.state.deletingId);
    this.closeDialog();
  };

  render() {
    const { palettes, classes, handleDelete } = this.props;
    const { dialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">New Palette</Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map((p, i) => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  key={i}
                  {...p}
                  handleClick={() => this.goToPalette(p.id)}
                  handleDelete={handleDelete}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={dialog}
          arial-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">Delete Palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.confirmDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
