//================================== Import Dependencies ====================>
import React, {Component} from 'react';
import './styles/Header.css';

export class Header extends Component {

  render() {


    return (

      <header className='header-container'>
          <div className='app-title'>
            Duelingo
          </div>
          <div className='app-menu'>
            <ul>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
      </header>
    )
  }
}

export default Header;
