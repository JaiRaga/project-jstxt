import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Button,
  Paper,
  IconButton
} from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#aaa",
    height: "100%",
    width: 250,
    overflow: "auto",
    position: "fixed"
  },
  tree: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400
  },
  container: {},
  items: {
    // margin: 5,
    // padding: 5
  }
  // paper: {
  //   padding: theme.spacing(2),
  //   width: 150,
  //   color: theme.palette.text.secondary
  // }
}));

const Files = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction='column'
        justify='center'
        // alignItems='space-between'
        className={classes.container}>
        <Grid item className={classes.items}>
          <TreeView
            className={classes.tree}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}>
            <TreeItem nodeId='1' label='components'>
              <TreeItem nodeId='2' label='Calendar'>
                <TreeItem nodeId='3' label='Calendar' />
                <TreeItem nodeId='4' label='Chrome' />
                <TreeItem nodeId='5' label='Webstorm' />
              </TreeItem>
              <TreeItem nodeId='6' label='Chrome' />
              <TreeItem nodeId='7' label='Webstorm' />
            </TreeItem>
          </TreeView>
        </Grid>
        <Grid item className={classes.items}>
          <Button startIcon={<DescriptionIcon />} fullWidth>
            File_name.js
          </Button>
        </Grid>
        <Grid item className={classes.items}>
          <Button startIcon={<DescriptionIcon />} fullWidth>
            File_name.js
          </Button>
        </Grid>
        <Grid item className={classes.items}>
          <Button startIcon={<DescriptionIcon />} fullWidth>
            File_name.js
          </Button>
        </Grid>
        <Grid item className={classes.items}>
          <Button startIcon={<DescriptionIcon />} fullWidth>
            File_name.js
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Files;
