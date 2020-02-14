import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from '@material-ui/core/Button';

// import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    largeIcon: {
      fontSize: "1.4em"
    },
  }));

export default function Footer() {
    const classes = useStyles();
        return (
            <div>
                <div id="newsletter-div">
                    <div>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Subscribe to recieve the latest updates and special offers.</p>
                    </div>
                    {/* <div></div> */}
                    <div>
                    <input type="text" id="newsletter" onFocus={{color: 'black'}}
                    style={{
                        borderRadius: 2,
                        backgroundColor: 'white',
                        padding: "5.5px 80px",
                        fontSize: "14px",
                        border: '1px solid white',
                        fontFamily: 'Montserrat',
                        // color: 'orange'
                    }}></input>
                    <Button variant="contained" color="primary" 
                    style={{
                    borderRadius: 2,
                    backgroundColor: '#E1EDDF',
                    padding: "9px 20px",
                    fontSize: "14px",
                    color: 'black',
                    fontWeight: 'bold',
                    border: 'none',
                    fontFamily: 'Montserrat',
                }}><Link to="/subscribe" style={{textDecoration: 'none', color: '#3e4e60'}}>subscribe</Link></Button>
                <br></br><br/>
                    </div>
                </div>
            <div id="footer">
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
                    <div></div>
                    <div>
                        <h2>Need help?</h2>
                        <p>We're here to help.
                        Please check the FAQ page or contact our support team.</p>
                        <br></br>
                    </div>
                    <div></div>
                    <div>
                        <h2>Contact</h2>
                        <p>support@sweetspot.com</p>
                        <p>(415) 358-9485</p>
                        <br></br>
                    </div>
                    <div></div>
                    
            </div>
            <div id="contact-div">
                <div><h3>Contact</h3></div>
                <div></div>
                <div><h3>Delivery</h3></div>
                <div></div>
                <div><h3>Returns</h3></div>
                <div></div>
                <div><h3><Link to='/faq' style={{color: 'black', textDecoration: 'none'}}>FAQ</Link></h3></div>
            </div>
            </div>
        )
}