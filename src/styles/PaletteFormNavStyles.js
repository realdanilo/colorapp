import { drawerWidth } from "../constants";
import sizes from "./sizes";
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
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
    [sizes.down("md")]: {
      marginLeft: 5,
      marginRight: 5,
    },
  },
  navTitle: {
    [sizes.down("md")]: {
      fontSize: "15px",
    },
  },
  navBtns: {
    marginRight: "1rem",
    display: "flex",
    flexWrap: "nowrap",
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("md")]: {
      fontSize: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  hide: {
    display: "none",
  },
});

export default styles;
