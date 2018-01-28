import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Auth from './components/auth/auth';
import Profile from './components/profile/profile';
import Forum from './components/forum/forum';
import { MapComp } from './components/map/map';
// import Nav from './components/nav/nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav className="Navbar"/> */}
        <Switch>
          <Route path="/" component={Auth} exact />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} exact/>
          <Route path="/forum" component={Forum}/>
          <Route path="/map" component={ MapComp }/>
          {/* <Route path="/ints" component={ Ints }/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
