import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Box,
  CssBaseline
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

const Navbar = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position='fixed'>
        <Toolbar>
          <Box mr={2}>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant='h6'>News</Typography>
          <Box flexGrow={1} />
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
