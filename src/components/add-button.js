import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const AddButton = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab aria-label="add" style={{background: deepOrange['300'], position: 'absolute', bottom: 0, right: 0}} color="primary" edge='end'>
        <AddIcon />
      </Fab>
    </div>
  );
}