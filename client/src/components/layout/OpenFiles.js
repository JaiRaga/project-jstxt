import React, { useState } from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative"
  },
  textarea: {
    position: "absolute",
    left: "250px"
  },
  lineNumber: {
    margin: "0 4px"
    // display: "inline-block"
  },
  margin: {
    margin: "5px 0"
  },
  numbers: {
    // display: "inline-block"
  },
  text: {
    position: "absolute",
    left: "86.400px",
    right: "-290px"
    // bottom: "-100px"
    // maxWidth: "100vw"
  },
  input: {
    // border: "none"
    // display: "inline-block"
    outline: "none",
    // resize: "none",
    overflow: "auto",
    lineHeight: "1.5"
  }
}));

const OpenFiles = () => {
  const classes = useStyles();
  const [editorData, setEditorData] = useState("Hello, World!");

  return (
    <div className={classes.root}>
      <Grid container item className={classes.textarea}>
        <Grid item className={classes.lineNumber}>
          <Grid container item direction='column' className={classes.numbers}>
            <Grid item className={classes.margin}>
              1
            </Grid>
            <Grid item className={classes.margin}>
              2
            </Grid>
            <Grid item className={classes.margin}>
              3
            </Grid>
            <Grid item className={classes.margin}>
              4
            </Grid>
            <Grid item className={classes.margin}>
              5
            </Grid>
            <Grid item className={classes.margin}>
              6
            </Grid>
            <Grid item className={classes.margin}>
              7
            </Grid>
            <Grid item className={classes.margin}>
              8
            </Grid>
            <Grid item className={classes.margin}>
              9
            </Grid>
            <Grid item className={classes.margin}>
              10
            </Grid>
            <Grid item className={classes.margin}>
              11
            </Grid>
            <Grid item className={classes.margin}>
              12
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.text}>
          {/* <Grid container item> */}
          {/* <Grid item> */}
          <TextField
            autofocus
            fullWidth
            variant='outlined'
            name='editor'
            multiline
            rows={33}
            value={editorData}
            onChange={(e) => setEditorData(e.target.value)}
            className={classes.input}
          />
          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default OpenFiles;
