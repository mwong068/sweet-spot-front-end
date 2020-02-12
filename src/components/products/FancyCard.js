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
          height: 450,
        //   padding: '20px 0 0 0',
        },
        media: {
          height: 120,
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
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                </div>
                )
        }
    }

    return (
        <div>
            {console.log(props.history)}
        <Card className={classes.root} onClick={() => {props.history.push(`/products/${props.id}`)}}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            title={props.name}
            image={ props.image }
            style={{width: '270px', height: '260px'}}
            /><br></br>
            <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
            <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                { props.name }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: '20px', marginLeft: '-10px'}}>
            {starRatings(props.rating)}
            </Typography>
            <br/>
            <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                ${ props.price }
            </Typography>
            </CardContent>
        </CardActionArea> 
        </Card>
        </div>
    )


}

// old cards
{/* <Card >
        <CardActionArea>
            <CardMedia
            // className={classes.media}
            title="Donut"
            image={ require('../../assets/macarons.jpg') }
            style={{width: '290px', height: '280px'}}
            /><br></br>
            <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
            <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                Macarons (Assorted)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            </Typography>
            <br/>
            <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                $30.00
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        
        <Card >
        <CardActionArea>
            <CardMedia
            // className={classes.media}
            image={ require('../../assets/chocolatecake.jpg') }
            title="Donut"
            style={{width: '290px', height: '280px'}}
            /><br></br>
            <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
            <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                Chocolate Raspberry C...
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" image={ require('../../assets/sweetspot.png') }>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            </Typography>
            <br/>
            <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
                $40.00
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        
        <Card >
        <CardActionArea>
        <CardMedia
    // className={classes.media}
    image={ require('../../assets/pannacotta.jpg') }
    title="Donut"
    style={{width: '290px', height: '280px'}}
    /><br></br>
    <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
    <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
        Strawberry Panna Cotta
    </Typography>
    <Typography variant="body2" color="textSecondary" component="h2">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
    </Typography>
    <br/>
    <Typography variant="body2" component="h2" style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}}>
        $20.00
    </Typography>
    </CardContent>
</CardActionArea>
</Card> */}