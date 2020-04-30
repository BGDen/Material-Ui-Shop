import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import brown from '@material-ui/core/colors/brown';
import MoreIcon from '@material-ui/icons/MoreVert';

import {AppDrawer} from './drawer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export function AppHeader() {
  const classes = useStyles();
  // const primary = brown[500];

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: brown[800]}}>
        <Toolbar>

          <AppDrawer edge="start" className={classes.menuButton} color="inherit" aria-label="menu"/>

          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}