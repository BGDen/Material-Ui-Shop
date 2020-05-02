import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'relative',
    top: theme.spacing(65),
    left: theme.spacing(3),
    zIndex: 0,
  },
}));

export const AddButton = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* <Fab aria-label="add" style={{background: deepOrange['300']}} color="primary" edge='end'>
        <AddIcon />
      </Fab> */}

      <Fab color= "secondary" className={classes.absolute} style={{background: deepOrange['300']}}>
          <AddIcon />
      </Fab>

    </div>
  );
}