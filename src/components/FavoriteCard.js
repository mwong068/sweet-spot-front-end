import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import deleteFavorite from '../actions/favorites/deleteFavorite';


export default function FavoriteCard(props) {

    const useStyles = makeStyles({
        root: {
          maxWidth: 305,
          height: 450,
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

    const dispatch = useDispatch();

    return (
        <div>
            {/* {console.log(props)} */}
        <Card className={classes.root} >
        <CardActionArea>
            <CardMedia
            onClick={() => {props.history.push(`/products/${props.id}`)}}
            className={classes.media}
            title={ props.name }
            image={ props.image }
            style={{width: '250px', height: '240px'}}
            /><br></br>
            <CardContent style={{height: '5px', textAlign: 'left', padding: '0 30px'}}>
            <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                { props.name }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: '24px'}}>
            {starRatings(props.rating)}
            </Typography>
            <br/>
            <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                ${ (props.price).toFixed(2) }
            </Typography>
            <Button 
                onClick={(event) => dispatch(deleteFavorite(event, props))}
                style={{
                borderRadius: 5,
                backgroundColor: 'white',
                // padding: "9px 27px",
                fontSize: "14px",
                color: 'black',
                border: '3px solid #f3e4b7',
                fontFamily: 'Montserrat',
                }}>Delete</Button>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
    )


}