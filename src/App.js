import React from 'react';
import './App.css';
import Homepage from './components/Homepage'; 
import Navbar from './components/Navbar'; 
import Header from './components/Header'; 
import Signup from './components/Signup'; 
import Profile from './components/Profile'; 
import Login from './components/Login'; 
import Footer from './components/Footer'; 
import CartContainer from './components/CartContainer'; 
import Cart from './components/Cart'; 
import ProductPage from './components/ProductPage'; 
import ProductList from './components/ProductList'; 
// import ProductPage from './components/ProductPage'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import checkUser from './actions/checkUser';
import getProducts from './actions/getProducts';
import getCartItems from './actions/getCartItems';


class App extends React.Component {

  componentDidMount () {
    this.props.checkUser(this.props.history);
    this.props.getProducts();
    
  }
  
  
  render () {
    return (
      <div className="App">
          <Router>
            <div>
              <Navbar />
              {/* <hr></hr> */}
            <Route path='/' render={ (props) => <Header {...props} /> } />
              {/* <hr></hr> */}
            </div>
            <div id="main-container">
            <Switch>
              <Route exact path='/' render={(props) => <Homepage {...props} /> } />
              <Route path='/signup' render={(props) => <Signup {...props}/> } />
              <Route path='/login' render={(props) => <Login {...props} />} />
              <Route exact path='/products' render={routerProps => <ProductList {...routerProps} />} />
              <Route path='/products/:id' render={(props) => <ProductPage {...props} />} />
              <Route path='/cart' render={(props) => <CartContainer {...props} />} />
              {/* <Route path='/about'>
                <About />
              </Route>
              <Route path='/favorites'>
                <Favorites />
              </Route> */}
              <Route path='/profile' render={(props) => <Profile {...props} />} />
            </Switch>
            </div>
            <div id="footer-div">
            <Footer />
            </div>
          </Router>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
      checkUser: () => { dispatch(checkUser()) },
      getProducts: (event) => { dispatch(getProducts(event)) },
     
    }
  }

  //use current cart id from state to find order items
  //make new comp for fetching cart items? and then pass down cart information to cart

  

export default connect(null, mapDispatchToProps)(App);
