import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Footer from "../layout/Footer";
import Editor from "../editor/Editor";
import Files from "../layout/Files";
import OpenFiles from "../layout/OpenFiles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  top: {
    marginTop: "auto"
  },
  container: {
    // maxWidth: "100%",
    // height: "100%"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Files />
        </Grid>
        <Grid item className={classes.container} xs={7}>
          <OpenFiles />
        </Grid>
        {/* <Grid item xs={12}>
          <SideMenu />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Home;
