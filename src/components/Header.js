//================================== Import Dependencies ====================>
import React, {Component} from 'react';
import './styles/Header.css';
import {Link} from 'react-router-dom';

export class Header extends Component {

  render() {


    return (

      <header className='header-container'>
          <div className='app-title'>
            <Link to='/'> Duelingo</Link>
          </div>
          <div className='app-menu'>
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link  to='/register'>Register</Link></li>
            </ul>
          </div>
      </header>
    )
  }
}

export default Header;
