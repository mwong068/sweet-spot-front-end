import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
        // will not work for some reason
    //   height: '230px',
    //   width: 500,
    },
  });
  
  

export default function Homepage() {

    const classes = useStyles();

    return (
        <div>
        <div id="landing-image">
            <div id="landing-text">
                <p>Made to Order.
                <br></br><br></br>Fresh Ingredients.
                <br></br><br></br>Local Pastry Chefs.</p>
                <Button variant="contained" color="primary"
                style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "7px 15px",
                    fontSize: "14px",
                    color: '#353535',
                    border: '3px solid #f3e4b7',
                    fontFamily: 'Montserrat',
                }}
                ><Link to="/products" style={{color: 'black', textDecoration: 'none'}}>Shop now ></Link></Button>
            </div>
        </div>
        <div id="break"></div>
        <div id="break"></div>
        <div id="promises">
            <div>
                <center>
                <AirplanemodeActiveOutlinedIcon style={{ fontSize: "32px", color: '#BDDCBC' }} />
                <h3>Free Shipping</h3>
                <p>Automatically applies to orders over $50.</p>
                </center>
            </div>
            <div>
            <hr style={{width: "0.1px", height: "85px" }}></hr>
            </div>
            <div>
                <center>
                <EmojiEventsOutlinedIcon style={{ fontSize: "32px", color: '#BDDCBC' }} />
                <h3>Quality Guaranteed</h3>
                <p>All sellers are verified to ensure quality items.</p>
                </center>
            </div>
            <div><hr style={{width: "0.1px", height: "85px" }}></hr>
            </div>
            <div>
                <center>
                <PeopleOutlineOutlinedIcon style={{ fontSize: "32px", color: '#BDDCBC' }} />
                <h3>Independent Sellers</h3>
                <p>Buy directly from sellers who handcraft each item.</p>
                </center>
            </div>
        </div>
        <div id="break"></div>
        <div id="featured">
            <h1>Featured Products</h1>
            <br></br>
            <div id="homepage-cards">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                title="Donut"
                image={ require('../assets/macarons.jpg') }
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
               
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={ require('../assets/chocolatecake.jpg') }
                title="Donut"
                style={{width: '290px', height: '280px'}}
                /><br></br>
                <CardContent style={{height: '5px', textAlign: 'left', padding: '10px'}}>
                <Typography gutterBottom variant="h5" style={{fontFamily: 'Montserrat'}}>
                    Chocolate Raspberry C...
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" image={ require('../assets/sweetspot.png') }>
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
               
            <Card className={classes.card}>
      <CardActionArea>
            <CardMedia
          className={classes.media}
          image={ require('../assets/pannacotta.jpg') }
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
    </Card>
            </div>
            <br></br><br></br><br></br><br></br>
            <center>
            <Button variant="contained" color="primary"
                style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "6px 20px",
                    fontSize: "14px",
                    color: 'black',
                    border: '3px solid #f3e4b7',
                    fontFamily: 'Montserrat',
                    // boxShadow: 'none'
                }}
                ><Link to="/products" style={{color: 'black', textDecoration: 'none'}}>view all</Link></Button>
                </center>
        </div>
        <div id="categories">
        <h1 style={{color: '#C3DBBF'}}>Top Categories</h1>
        <br></br>
        <center>
        <div class="grid-container">
            <div class="grid-item"><img src={require('../assets/closeupmacarons.jpg')} width='100%' height='100%'></img></div>
            
            <div class="grid-item"><img src={require('../assets/cupcakes.jpg')} width='100%' height='100%'></img></div>
            <div class="grid-item"><img src={require('../assets/tarts.jpg')} width='100%' height='100%' style={{objectFit: 'cover'}}></img></div>
            <div class="grid-item"><img src={require('../assets/pie.jpg')} width='100%' height='100%'    style={{objectFit: 'cover'}}></img></div>
            <div class="grid-item" style={{border: 'none'}}>Macarons<hr></hr></div>
            <div class="grid-item" style={{border: 'none'}}>Cupcakes<hr></hr></div>
            <div class="grid-item" style={{border: 'none'}}>Tarts<hr></hr></div>
            <div class="grid-item" style={{border: 'none'}}>Pie<hr></hr></div>
            <div class="grid-item"><img src={require('../assets/cookies.jpg')} width='100%' height='100%' style={{objectFit: 'cover'}}></img></div>
            <div class="grid-item"><img src={require('../assets/cheesecake.jpg')} width='100%' height='100%' style={{objectFit: 'cover'}}></img></div>
            <div class="grid-item"><img src={require('../assets/cake.jpg')} width='100%' height='100%' style={{objectFit: 'cover'}}></img></div>
            <div class="grid-item"><img src={require('../assets/pudding.jpg')} width='100%' height='100%' style={{objectFit: 'cover'}}></img></div>
            <div class="grid-item" style={{border: 'none'}}>Cookies<hr></hr></div>
            <div class="grid-item" style={{border: 'none'}}>Cheesecakes<hr></hr></div>
            <div class="grid-item" style={{border: 'none'}}>Cakes<hr></hr></div>
            <div class="grid-item" style={{border: 'none'}}>Puddings<hr></hr></div>
        </div>
        <br></br><br></br>
            <Button variant="contained" color="primary"
                style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "6px 20px",
                    fontSize: "14px",
                    color: 'black',
                    border: '3px solid #f3e4b7',
                    fontFamily: 'Montserrat',
                }}
                ><Link to="/products" style={{color: 'black', textDecoration: 'none'}}>shop all</Link></Button>
            </center>
        </div>
        <div id="break"></div>
        <br></br><br></br>
        <div id="break"></div>
        <div id="about">
            <h1 style={{color: '#C3DBBF'}}>About Sweet Spot</h1>
            <p>The Sweet Spot is a community where chefs can share their passion for baking</p>
            <p>with dessert lovers looking to satisfy that sweet spot. We believe that exceptional</p>
            <p>food should not be limited.</p>
        </div>
        </div>
    )
}