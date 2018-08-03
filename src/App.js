import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {Route} from 'react-router-dom';
import CreateAccount  from './components/CreateAccount';
import RegisterSuccess from './components/RegisterSuccess';
import Login from './components/Login';
import VerifyDuoAccount from './components/VerifyDuoAccount';
import Landing_ConsoleHOC from './components/Landing_ConsoleHOC'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path='/' component={Landing_ConsoleHOC} />
        <Route exact path='/register' component={CreateAccount} />
        <Route exact path='/registersuccess' component={RegisterSuccess} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/verifyduoacct' component={VerifyDuoAccount} />
      </div>
    );
  }
}

export default App;
