import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import store from './redux/store.js';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';
import createNewOrder from '../actions/cart/createNewOrder';
import filterProducts from '../actions/products/filterProducts';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'orange',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.black, 0.15),
    boxShadow: 'none',
    borderBottom: '2px solid #ddd',
    WebkitAppearance: 'none',
    borderRadius: '0',
    paddingBottom: '9px',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 100,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
    // paddingBottom: '10px',
    marginTop: '-3px',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
    },
  largeIcon: {
    fontSize: "1.3em",
    color: 'black',
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  const user = useSelector(state => state.currentUser);
  const order = useSelector( state => state.currentOrder);
  const products = useSelector( state => state.products);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSearch = (event, history) => {
    if(event.key === 'Enter') {
      dispatch(filterProducts(event.target.value, products, history))
    }
  }

  const [input, setInput] = useState( '' );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user.length === 0 ?
      <MenuItem onClick={handleMenuClose}><Link to="/login" style={{ color: 'black', textDecoration: 'none', fontFamily: 'Montserrat', }}>Login</Link></MenuItem> : null}
      {user.length === 0 ?
      <MenuItem onClick={handleMenuClose}><Link to="/signup" style={{ color: 'black', textDecoration: 'none', fontFamily: 'Montserrat',}}>Sign Up</Link></MenuItem> : null}
      {user.length !== 0 ?
      <MenuItem onClick={handleMenuClose}><Link to="/profile" style={{ color: 'black', textDecoration: 'none', fontFamily: 'Montserrat', }}>Profile</Link></MenuItem> : null}
    </Menu>
  );

  

  return (
    <div className={classes.root}>
        {/* {dispatch(createNewOrder(user))} */}

      <AppBar position="static" elevation={0} style={{ background: 'white',  padding: '20px', color: 'black' }}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            hi
          </IconButton> */}
          <Typography edge="start" variant="h3" className={classes.title}>
          {/* space holder */}
          </Typography>

          <Typography edge="start" variant="h3" className={classes.title}>
          {/* <span style={{color: 'teal'}}>Sweet</span> <span style={{color: 'orange'}}>Spot</span> */}
          <Link to='/'><img src={ require('../assets/sweetspot.png') } /></Link>
          </Typography>
          
          <Typography edge="start" variant="h3" className={classes.title}>
          {/* space holder */}          
          </Typography>

          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
              style={{fontFamily: 'Montserrat'}}
              placeholder="Find something sweet..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown={(event) => handleSearch(event, props.history)}
            />
            </div>


            <Typography edge="start" variant="h3" className={classes.title}>          
          {/* space holder */}
          </Typography>
          
          
          {/* <IconButton aria-label="search" color="inherit" >
            <SearchIcon className={classes.largeIcon}/>
          </IconButton> */}

          
          <IconButton aria-label="favorites" color="inherit">
          <Link to="/favorites">
            <FavoriteBorderIcon className={classes.largeIcon}/>
            </Link>
          </IconButton>

          <IconButton aria-label="account of current user"
              aria-haspopup="true"
              // className={classes.largeIcon}
              color="inherit"
              // edge="end"
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
                {/* <Link to="/signup"> */}
              <AccountCircle className={classes.largeIcon}/>
                {/* </Link> */}
          </IconButton>

          <IconButton aria-label="cart" color="inherit">
            <Link to="/cart" onClick={() => dispatch(createNewOrder(user))}>
            <ShoppingCartIcon className={classes.largeIcon}/>
            </Link>
          </IconButton>

          <Typography edge="start" variant="h3" className={classes.title}>          
          {/* space holder */}
          </Typography>
          <Typography edge="start" variant="h3" className={classes.title}>          
          {/* space holder */}
          </Typography>

        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
