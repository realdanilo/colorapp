import background from "./bg.svg";
import sizes from "./sizes";
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
    "& a": {
      color: "white",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "rgba(255,255,255,0.8)",
    },
  },
  title: {
    fontSize: "25px",
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

export default styles;
