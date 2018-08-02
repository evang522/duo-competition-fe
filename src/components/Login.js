//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './styles/Login.css';

//================================== Login ====================>
export class Login extends Component {
  render() {
    return (
      <section className='login-container'>
        <h1>Login</h1>
        <form className='login-form'>
          <div className='form-group'>
            <label htmlFor='name'>Email</label>
            <input ref={self => this.emailInput = self} className='form-control' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Password</label>
            <input type='password' ref={self => this.passwordInput = self} className='form-control' id='email'/>
          </div>
          <button className='btn btn-success'>Submit</button>
          <br/>
        </form>
    
      </section>
    )
  }
}

export default Login;