//================================== Import Dependencies ====================>
import React, {Component} from 'react';
import './styles/Header.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

export class Header extends Component {

  render() {


    return (

      <header className='header-container'>
          <div className='app-title'>
            <Link to='/'> Duelingo</Link>
          </div>
          <div className='app-menu'>
            <ul>
              {this.props.loggedIn ? '' : 
              <div>
              <li><Link to='/login'>Login</Link></li>
              <li><Link  to='/register'>Register</Link></li> 
              </div>}
            </ul>
          </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.authToken
})

export default connect(mapStateToProps)(Header);
