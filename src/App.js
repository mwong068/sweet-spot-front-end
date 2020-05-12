import React from 'react';
import './App.css';
import Homepage from './components/Homepage'; 
import Navbar from './components/Navbar'; 
import Header from './components/Header'; 
import Signup from './components/Signup'; 
import Profile from './components/profile/Profile'; 
import Login from './components/Login'; 
import Footer from './components/Footer'; 
import Favorites from './components/Favorites'; 
import About from './components/About'; 
import FAQ from './components/FAQ'; 
import Subscribe from './components/Subscribe'; 
import CartContainer from './components/cart/CartContainer'; 
import Checkout from './components/checkout/Checkout'; 
import ProductPage from './components/products/ProductPage'; 
import ProductList from './components/products/ProductList'; 
import AddProduct from './components/products/AddProduct'; 
// import ProductPage from './components/ProductPage'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import checkUser from './actions/users/checkUser';
import getProducts from './actions/products/getProducts';
import getCartItems from './actions/cart/getCartItems';
import createNewOrder from './actions/cart/createNewOrder';
import { StripeProvider } from 'react-stripe-elements';


class App extends React.Component {

  componentDidMount () {
    this.props.checkUser(this.props.history);
    this.props.getProducts();
    // this.props.createNewOrder();
    
  }
  
  
  render () {
    return (
      <StripeProvider apiKey="pk_test_cRRsSyQG1P5OIPHaqKE9WCle00cRU8M7Bu">
      <div className="App">
          <Router>
            <div>
            <Route path='/' render={(props) => <Navbar {...props} /> } />
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
              <Route path='/addproduct' render={(props) => <AddProduct {...props} />} />
              <Route path='/about'><About /></Route>
              <Route path='/subscribe'><Subscribe /></Route>
              <Route path='/faq'><FAQ /></Route>
              <Route path='/favorites' render={(props) => <Favorites {...props} />} />
              <Route path='/profile' render={(props) => <Profile {...props} />} />
              <Route path='/checkout' render={(props) => <Checkout {...props} />} />
            </Switch>
            </div>
            <div id="footer-div">
            <Footer />
            </div>
          </Router>
      </div>
      </StripeProvider>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
      checkUser: () => { dispatch(checkUser()) },
      getProducts: (event) => { dispatch(getProducts(event)) },
      // createNewOrder: (userInfo) => { dispatch(createNewOrder(userInfo)) }
    }
  }


export default connect(null, mapDispatchToProps)(App);
