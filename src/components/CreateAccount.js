//================== Import Dependencies ================>
import React, {Component} from 'react';


//=================== Create Account ====================>

export class CreateAccount extends Component {
  render() {

    return (
      <section className='create-account-container'>
        <h1>Let's Get Started with Duelingo!</h1>
        <form className='create-account-form'>
          <label htmlFor='name'>Name</label>
          <input id='name'/>
          <label htmlFor='email'>Email</label>
          <input id='email'/>
          <label htmlFor='password'>Password</label>
          <input id='password'/>
          <label htmlFor='password1'>Verify Password</label>
          <input id='password1'/>
          
        </form>
      </section>
    )
  }
}