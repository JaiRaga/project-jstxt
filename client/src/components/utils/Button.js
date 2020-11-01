import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    // margin: "5px 3px",
    padding: "3px 10px",
    backgroundColor: "#1976d2",
    // border: "1px solid #f1d4d4",
    outline: "none",
    transitionDuration: "0.4s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1d4d4",
      color: "#14274e"
      // border: "1px solid #cc0e74"
    }
  },
  meddium: {},
  large: {},
  fullWidth: {}
}));

const Button = ({ name, onClick }) => {
  const classes = useStyles();
  return (
    <button className={classes.small} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
