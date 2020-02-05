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

export default function MediaCard(props) {

let starRatings = (num) => {
    if (num === 1) {
        return (
            <div>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
        )
    }
    else if (num === 2) {
        return (
            <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>
            )
    }
    else if (num === 3) {
        return (
            <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>
            )
    }
    else if (num === 4) {
        return (
            <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            </div>
            )
    }
    else {
        return (
            <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            </div>
            )
    }
}



  const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardActionArea>
            <CardMedia
          className={classes.media}
          image={props.attributes.image}
          title="Donut"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Montserrat'}}>
              {/* {match.params.product.id} */}
            {props.attributes.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
          {starRatings(props.attributes.rating)}
          </Typography>
          <br/>
          <Typography variant="body2" color="primary" component="p" style={{fontFamily: 'Montserrat'}}>
            ${props.attributes.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
