import React from 'react';
import Button from '@material-ui/core/Button';
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
      height: 230,
      width: 500,
    },
  });

export default function Homepage() {
    const classes = useStyles();
    return (
        <div>
        <div id="landing-image">
            <div id="landing-text">
                <h2>Made to order.</h2>
                <h2>Fresh ingredients.</h2>
                <h2>From local pastry chefs.</h2>
                <br/>
                <Button variant="contained" color="primary"
                style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "9px 15px",
                    fontSize: "14px",
                    color: 'black',
                    border: '3px solid #ECD189',
                }}
                >Shop now ></Button>
            </div>
        </div>
        <div id="break"></div>
        <div id="promises">
            <div>
                <center>
                <AirplanemodeActiveOutlinedIcon style={{ fontSize: "32px", color: '#BDDCBC' }} />
                <h3>Free Shipping</h3>
                <p>Applies to orders over $50.</p>
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
            <h1 style={{color: '#C3DBBF'}}>Featured Products</h1>
            <br></br>
            <div id="homepage-cards">
            <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
                <div></div>
            <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1570368112535-43e1e5b78f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1107&q=80"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
                <div></div>
            <div>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            </div>
            <br></br><br></br>
            <center>
            <Button variant="contained" color="primary"
                style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "6px 20px",
                    fontSize: "14px",
                    color: 'black',
                    border: '3px solid #ECD189',
                }}
                >view all</Button>
                </center>
        </div>
        <div id="break"></div>
        <div id="categories">
        <h1 style={{color: '#C3DBBF'}}>Top Categories</h1>
        <center>
        <div class="grid-container">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">Macarons</div>
            <div class="grid-item">Cupcakes</div>
            <div class="grid-item">Tarts</div>
            <div class="grid-item">Pie</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
            <div class="grid-item">Cookies</div>
            <div class="grid-item">Cheesecakes</div>
            <div class="grid-item">Cakes</div>
            <div class="grid-item">Puddings</div>
        </div>
        <br></br>
            <Button variant="contained" color="primary"
                style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: "6px 20px",
                    fontSize: "14px",
                    color: 'black',
                    border: '3px solid #ECD189',
                }}
                >shop all</Button>
            </center>
        </div>
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