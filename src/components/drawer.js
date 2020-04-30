import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import WatchIcon from '@material-ui/icons/WatchTwoTone';
import Delivery from '@material-ui/icons/OpenWith';
import Basket from '@material-ui/icons/ShoppingCartTwoTone';
import Filter from '@material-ui/icons/FilterListRounded';
// import green from '@material-ui/core/colors/green';
// import lightBlue from '@material-ui/core/colors/lightBlue'
import { deepOrange, lightBlue, green } from '@material-ui/core/colors';


const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
});

export const AppDrawer = ()=> {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // top: false,
    left: false
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Watch', 'Basket', 'Filter'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{marginLeft: 20}}>
                {index === 0 ? <WatchIcon style={{color: green['A700']}}/> : 
                  index % 2 === 0 ? <Filter /> : 
                  <Basket style={{color: lightBlue['A700']}}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Delivery'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{marginLeft: 20}}>
              {index === 0 ? <Delivery style={{color: deepOrange['A700']}}/> : false}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} color="inherit">
            {<MenuIcon />}
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}