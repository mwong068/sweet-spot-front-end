import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: '230px',
    color: 'orange',
  },
  largeIcon: {
    fontSize: "1.3em"
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} style={{ background: 'white',  padding: '20px', color: 'black' }}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h3" className={classes.title}>
          <span style={{color: 'teal'}}>Sweet</span> <span style={{color: 'orange'}}>Spot</span>
          </Typography>
          
          <IconButton aria-label="search" color="inherit" >
            <SearchIcon className={classes.largeIcon}/>
          </IconButton>
          
          <IconButton aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
            className={classes.largeIcon}
              color="inherit"
            >
              <AccountCircle className={classes.largeIcon}/>
          </IconButton>

          <IconButton aria-label="favorites" color="inherit">
            <FavoriteBorderIcon className={classes.largeIcon}/>
          </IconButton>

          <IconButton aria-label="search" color="inherit">
            <ShoppingCartIcon className={classes.largeIcon}/>
          </IconButton>
            
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
