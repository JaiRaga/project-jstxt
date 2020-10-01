import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SideMenu from "../layout/SideMenu";
import Editor from "../editor/Editor";
import Files from "../layout/Files";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  top: {
    marginTop: "auto"
  }
  // container: {
  //   alignItems: "baseline"
  // }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        {/* <Grid item> */}
        <Files />
        {/* </Grid> */}
        {/* <Grid item > */}

        <SideMenu />

        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default Home;
