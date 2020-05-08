import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
// import { brown } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  basket: {
    marginRight: theme.spacing(2),
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


export const CustomizedBadges = ()=> {
  const classes = useStyles();

  return (
    <IconButton  aria-label="cart" color='inherit' className={classes.basket}>
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon fontSize='large'/>
      </StyledBadge>
    </IconButton>
  );
}