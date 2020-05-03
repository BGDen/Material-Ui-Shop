import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import brown from '@material-ui/core/colors/brown';

import {AppDrawer} from './drawer';
// import {MenuPopup} from './small-component/Header-MoreMenu';
import {CustomizedBadges} from './small-component/Header-BasketBadge';
import {SearchInput} from './small-component/Header-SearchInput';


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


export const AppHeader = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: brown[800]}}>
        <Toolbar>

          <AppDrawer edge="start" className={classes.menuButton} color="inherit" aria-label="menu"/>

          <Typography variant="h6" className={classes.title}>
            Delta-Shop
          </Typography>

          {/* <MenuPopup aria-label="display more actions" /> */}

          <SearchInput />

          <CustomizedBadges />

        </Toolbar>
      </AppBar>
    </div>
  );
}