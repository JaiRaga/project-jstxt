import React from "react";
import { Grid, IconButton, makeStyles, Button } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Files from "./Files";
// import Editor from "../editor/Editor";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0
  },
  container: {
    backgroundColor: "#e343e3"
    // marginTop: "auto"
    // width: "auto"
  },
  right: {
    marginLeft: "auto"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems='flex-end' className={classes.root}>
      <Grid
        container
        item
        direction='row'
        justify='flex-start'
        className={classes.container}>
        <Grid item>
          <Button>
            <AcUnitIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <AcUnitIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <AcUnitIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <AcUnitIcon />
          </Button>
        </Grid>
        <Grid item className={classes.right}>
          <Button>
            <AcUnitIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <AcUnitIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
