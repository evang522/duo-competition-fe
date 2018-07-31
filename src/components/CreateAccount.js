//================== Import Dependencies ================>
import React, {Component} from 'react';
import './styles/CreateAccount.css';

//=================== Create Account ====================>

export class CreateAccount extends Component {
 constructor(props) {
   super(props);

   this.state = {
     error:null
   }
 }

  verifyMatchingPasswords = () => {
    clearTimeout(this.timer);
    const checkPasswords = () => {
      if (this.password1Input.value !== this.passwordInput.value) {
        console.log('setting error');
        this.setState({
          error: 'Passwords do not match'
        });
      } else {
        this.setState({
          error:null
        })
      }
    }
    // const check = () => console.log('hi');

    this.timer = setTimeout(checkPasswords, 500);
  }


  render() {

    return (
      <section className='create-account-container'>
        <h1>Let's Get Started with Duelingo!</h1>
        <form className='create-account-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input ref={self => this.nameInput = self} className='form-control' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input ref={self => this.emailInput = self} className='form-control' id='email'/>
          </div>
          <div className='form-group' >
            <label htmlFor='password'>Password</label>
            <input ref={self => this.passwordInput = self} onKeyDown={() => this.verifyMatchingPasswords()} className='form-control' id='password'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password1'>Verify Password</label>
            <input ref={self => this.password1Input = self} onKeyDown={() => this.verifyMatchingPasswords()} className='form-control' id='password1'/>
          </div>
          {this.state.error ? <small> {this.state.error}</small> : ''}
          <button className='btn btn-success'>Submit</button>
          <br/>
        </form>
      </section>
    )
  }
}