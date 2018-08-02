//============================================ Import Dependencies ======================================>
import React from 'react';
import './styles/RegisterSuccess.css';
import {Link} from 'react-router-dom';

//================================== Register Success ====================>
export default class SuccessfulLogin extends React.Component {

  render() {

    return (
      <section className='register-success-container'>
        <h1> Register Successful!</h1>
        <br/>
        <p>Welcome!</p>
        <Link to='/login'><button className='btn btn-secondary'>
          Login
        </button>
        </Link>
      </section>
    )
  }

}