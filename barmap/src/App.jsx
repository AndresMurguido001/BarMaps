import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/authActions'
import { logoutUser } from './actions/authActions'
//Components
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import NavBar from './components/Navbar'

if (localStorage.jwtToken) {

  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime ) {
    console.log("OLD TOKEN");
    store.dispatch(logoutUser())
    // //Clear Profile
    window.location.href = '/login'
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

          </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
