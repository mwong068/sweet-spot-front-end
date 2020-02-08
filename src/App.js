import React from 'react';
import './App.css';
import Homepage from './components/Homepage'; 
import Navbar from './components/Navbar'; 
import Header from './components/Header'; 
import Signup from './components/Signup'; 
import Profile from './components/Profile'; 
import Login from './components/Login'; 
import Footer from './components/Footer'; 
import Cart from './components/Cart'; 
import ProductContainer from './components/ProductContainer'; 
// import ProductPage from './components/ProductPage'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import checkUser from './actions/checkUser';
import getProducts from './actions/getProducts';


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
              <Route path='/products' render={routerProps => <ProductContainer {...routerProps} />} />
              <Route path='/cart' render={(props) => <Cart {...props} />} />
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
      getProducts: (event) => { dispatch(getProducts(event)) }
    }
  }
  

export default connect(null, mapDispatchToProps)(App);
