import React, { Fragment, useState } from "react";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import MenuList from "./MenuList";
import Button from "../utils/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "grid",
    // gridTemplateColumns: "repeat(24, 1fr)",
    // gridTemplateRows: "repeat(2, 1fr)"
  },
  container_1: {
    gridColumn: "span 24",
    gridRow: "span 1",
    display: "flex"
  },
  container_2: {
    gridColumn: "span 24",
    gridRow: "span 1",
    display: "flex"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  // popup Menu
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // Custom Built Menu List
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event) => {
    setOpenMenu((val) => !val);
    console.log(openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    // <div className={classes.container}>
    <Fragment>
      <div className={classes.container_1}>
        <div>
          <Button name='File' onClick={handleClick} />
          {openMenu ? <MenuList /> : null}
        </div>
        <div>
          <Button name='View' />
        </div>
        <div>
          <Button name='Edit' />
        </div>
        <div>
          <Button name='terminal' />
        </div>
      </div>
      <div className={classes.container_2}>
        {/* <Button size='small'>File</Button>
        <Button size='small'>View</Button>
        <Button size='small'>Edit</Button>
        <Button size='small'>Terminal</Button>
        <Button size='small'>File</Button>
        <Button size='small'>View</Button>
        <Button size='small'>Edit</Button>
        <Button size='small'>Terminal</Button> */}
      </div>
    </Fragment>
    // </div>
  );
};

export default Navbar;
