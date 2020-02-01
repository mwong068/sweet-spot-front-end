import React from 'react';
import './App.css';
import Homepage from './components/Homepage'; 
import Navbar from './components/Navbar'; 
import Header from './components/Header'; 
import Signup from './components/Signup'; 
import Profile from './components/Profile'; 
import Login from './components/Login'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Navbar />
            <Header />
          </div>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            {/* <Route path='/about'>
              <About />
            </Route>
            <Route path='/favorites'>
              <Favorites />
            </Route> */}
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
