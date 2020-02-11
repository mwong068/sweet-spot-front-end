import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function FancyCard(props) {

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          height: 440,
          padding: '20px 0 0 0',
        },
        media: {
          height: 140,
        },
      });

    const classes = useStyles();

    const starRatings = (num) => {
        if (num === 1) {
            return (
                <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            )
        }
        else if (num === 2) {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </div>
                )
        }
        else if (num === 3) {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </div>
                )
        }
        else if (num === 4) {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                </div>
                )
        }
        else {
            return (
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </div>
                )
        }
    }

    return (
        <div>
            {console.log(props)}
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            title="Donut"
            image={ props.product.image }
            style={{width: '290px', height: '280px'}}
            /><br></br>
            <CardContent style={{height: '5px', textAlign: 'left', padding: '0 30px'}}>
            <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                { props.product.name }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {starRatings(props.product.rating)}
            </Typography>
            <br/>
            <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                ${ props.product.price }
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
    )


}