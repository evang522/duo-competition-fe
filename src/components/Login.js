//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './styles/Login.css';
import {login} from '../state/actions/users.actions';
import {connect} from 'react-redux';

//================================== Login ====================>
export class Login extends Component {

  loginSubmit(e) {
    e.preventDefault();
    if (this.emailInput.value && this.passwordInput.value) {
      this.props.dispatch(login(this.emailInput.value, this.passwordInput.value));
    }
    this.emailInput.value = '';
    this.passwordInput.value = '';
  }

  render() {
    return (
      <section className='login-container'>
        <h1>Login</h1>
        <form onSubmit= {e => this.loginSubmit(e)} className='login-form'>
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
      {this.props.userInfo ? <Redirect to='/' /> : ''}
      </section>
    )
  }
}


const mstp = s => ({
  userInfo: s.users.userInfo
})

export default connect(mstp)(Login);

