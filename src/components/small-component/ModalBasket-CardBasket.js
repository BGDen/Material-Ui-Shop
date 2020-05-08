import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
});

export const BasketCard = (props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <CardMedia className={classes.media} image={props.data.img} /> */}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Del</Button>
      </CardActions>
    </Card>
  );
}