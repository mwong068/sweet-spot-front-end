import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    largeIcon: {
      fontSize: "1.4em"
    },
  }));

export default function Footer() {
    const classes = useStyles();
        return (
            <div>
            <div id="footer">
                    <div>
                        <h2>Need help?</h2>
                        <p>We're here to help.</p>
                        <p>Please check the FAQ page or contact our support team.</p>
                    </div>
                    <div></div>
                    <div>
                        <center>
                        <h2>Join our Newsletter</h2>
                        <input type="text" id="newsletter"></input>
                        <Button variant="contained" color="primary">Join</Button>
                        <p>Sign up to recieve the latest updates and special offers.</p>
                        </center>
                    </div>
                    <div></div>
                    <div>
                        <h2>Follow Us</h2>
                        <IconButton aria-label="search" color="inherit" >
                        <FacebookIcon className={classes.largeIcon}/>
                        </IconButton>
                        <IconButton aria-label="search" color="inherit" >
                        <TwitterIcon className={classes.largeIcon}/>
                        </IconButton>
                        <IconButton aria-label="search" color="inherit" >
                        <InstagramIcon className={classes.largeIcon}/>
                        </IconButton>
                        <IconButton aria-label="search" color="inherit" >
                        <PinterestIcon className={classes.largeIcon}/>
                        </IconButton>
                        <br></br><br></br>
                    </div>
            </div>
            <div id="contact-div">
                <div><h3>Contact</h3></div>
                <div></div>
                <div><h3>Delivery</h3></div>
                <div></div>
                <div><h3>Returns</h3></div>
                <div></div>
                <div><h3>FAQ</h3></div>
            </div>
            </div>
        )
}