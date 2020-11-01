import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    // gridAutoRows: "100px",
    zIndex: 5,
    backgroundColor: "#f1f6f9",
    color: "#14274e"
  },
  items: {
    gridColumn: "span 8"
  }
}));

const Layer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.items}>Item</div>
      <div className={classes.items}>Item</div>
      <div className={classes.items}>Item</div>
      <div className={classes.items}>Item</div>
    </div>
  );
};

export default Layer;
