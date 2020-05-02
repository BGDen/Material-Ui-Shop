import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';


import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  basket: {
    marginRight: theme.spacing(3),
  },
}));



export const MenuPopup = ()=> {
  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>

          <IconButton aria-label="display more actions" color="inherit" {...bindTrigger(popupState)} className={classes.basket}>
            <MoreIcon fontSize='large'/>
          </IconButton>

          
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Cake</MenuItem>
            <MenuItem onClick={popupState.close}>Death</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}