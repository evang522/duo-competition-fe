import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {Route} from 'react-router-dom';
import { CreateAccount } from './components/CreateAccount';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={CreateAccount} />
      </div>
    );
  }
}

export default App;
