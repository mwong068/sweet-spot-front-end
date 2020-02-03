import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to="/productpage">
            <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1570368112535-43e1e5b78f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1107&q=80"
          title="Donut"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Donut
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            justDeezNuts
          </Typography>
          <br/>
          <Typography variant="body2" color="primary" component="p">
            $15.00
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      {/* <CardActions>
      <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
