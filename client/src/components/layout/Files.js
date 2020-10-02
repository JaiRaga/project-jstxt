import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  makeStyles,
  Button,
  Paper,
  IconButton,
  Typography
} from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import Label from "@material-ui/icons/Label";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

// For Styled Components
const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)"
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent"
    }
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2)
    }
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit"
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color='inherit' className={classes.labelIcon} />
          <Typography variant='body2' className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant='caption' color='inherit'>
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};

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
  },
  treeview: {
    marginLeft: 3
  }
  // paper: {
  //   padding: theme.spacing(2),
  //   width: 150,
  //   color: theme.palette.text.secondary
  // }
}));

const data = {
  id: "root",
  name: "Components",
  icon: FolderIcon,
  // expandIcon: <ExpandMoreIcon />,
  // collapseIcon: <ChevronRightIcon />,
  children: [
    {
      id: "1",
      name: "items",
      icon: FolderIcon,
      // expandIcon: <ExpandMoreIcon />,
      // collapseIcon: <ChevronRightIcon />,
      children: [
        {
          id: "2",
          name: "Editor.js",
          icon: DescriptionIcon,
          color: "#1a73e8",
          bgColor: "#e8f0fe"
        }
      ]
    },
    {
      id: "3",
      name: "layout",
      icon: FolderIcon,
      // expandIcon: <ExpandMoreIcon />,
      // collapseIcon: <ChevronRightIcon />,
      children: [
        {
          id: "4",
          name: "Navbar.js",
          icon: DescriptionIcon,
          color: "#a250f5",
          bgColor: "#f3e8fd"
        }
      ]
    }
  ]
};

{
  /* <StyledTreeItem
  nodeId='7'
  labelText='Forums'
  labelIcon={ForumIcon}
  labelInfo='3,566'
  color='#a250f5'
  bgColor='#f3e8fd'
/>; */
}

const Files = () => {
  const classes = useStyles();

  const renderTree = (nodes) => (
    <StyledTreeItem
      key={nodes.id}
      nodeId={nodes.id}
      labelIcon={nodes.icon}
      labelText={nodes.name}
      labelInfo={nodes.name}
      color={nodes.color}
      bgColor={nodes.bgColor}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
    // <TreeItem
    //   key={nodes.id}
    //   nodeId={nodes.id}
    //   label={nodes.name}
    //   icon={nodes.icon}
    //   expandIcon={nodes.expandIcon}
    //   collapseIcon={nodes.collapseIcon}
    //   className={classes.treeview}>
    //   {Array.isArray(nodes.children)
    //     ? nodes.children.map((node) => renderTree(node))
    //     : null}
    // </TreeItem>
  );

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
            {renderTree(data)}
          </TreeView>
        </Grid>
        {/* <Grid item className={classes.items}>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect>
            <TreeItem
              className={classes.treeview}
              nodeId='1'
              expandIcon={<ExpandMoreIcon />}
              collapseIcon={<ChevronRightIcon />}
              endIcon={<FolderIcon />}
              icon={<DescriptionIcon />}
              label='Applications'>
              <TreeItem nodeId='2' label='Calendar'>
                <TreeItem nodeId='5' label='Chrome' />
                <TreeItem nodeId='6' label='Webstorm' />
              </TreeItem>
              <TreeItem nodeId='3' label='Chrome' />
              <TreeItem nodeId='4' label='Webstorm' />
            </TreeItem>
          </TreeView>
        </Grid> */}
        {/* <Grid item className={classes.items}>
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
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Files;
