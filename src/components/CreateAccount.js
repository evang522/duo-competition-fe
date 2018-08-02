//================== Import Dependencies ================>
import React, {Component} from 'react';
import './styles/CreateAccount.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register,  setSuccessfulAccountCreation} from '../state/actions/users.actions';
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

    this.timer = setTimeout(checkPasswords, 500);
  }

  verifyEmail = () => {
    clearTimeout(this.emailTimer);
    const checkEmail = () => {
      if (!this.emailInput.value.includes('@') || !this.emailInput.value.includes('.') || !this.emailInput.value[this.emailInput.value.indexOf('.') +1] || !this.emailInput.value[this.emailInput.value.indexOf('@') -1]) {
        console.log('setting error');
        this.setState({
          error: 'Invalid Email'
        });
      } else {
        this.setState({
          error:null
        })
      }
    }

    this.emailTimer = setTimeout(checkEmail, 700);
  }


  submitForm = e => {
    e.preventDefault();

    // this.verifyEmail();
    // this.verifyMatchingPasswords();

    if (!this.state.error && this.nameInput.value && this.emailInput.value && this.passwordInput.value) {
      this.props.dispatch(register(this.nameInput.value,this.emailInput.value, this.passwordInput.value));

      //Clear Inputs
      this.emailInput.value = '';
      this.password1Input.value = '';
      this.passwordInput.value = '';
      this.nameInput.value = '';
      this.props.dispatch(setSuccessfulAccountCreation());
    }
  }

  render() {

    return (
      <section className='create-account-container'>
        <h1>Let's Get Started with Duelingo!</h1>
        <form onSubmit={e => this.submitForm(e)} className='create-account-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input ref={self => this.nameInput = self} className='form-control' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input ref={self => this.emailInput = self} className='form-control' onKeyDown={() => this.verifyEmail()} id='email'/>
          </div>
          <div className='form-group' >
            <label htmlFor='password'>Password</label>
            <input ref={self => this.passwordInput = self} onKeyDown={() => this.verifyMatchingPasswords()} className='form-control' id='password' type='password'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password1'>Verify Password</label>
            <input ref={self => this.password1Input = self}  type='password' onKeyDown={() => this.verifyMatchingPasswords()} className='form-control' id='password1'/>
          {this.state.error ? <small className='redText'> {this.state.error}</small> : ''}
          </div>
          <button className='btn btn-success'>Submit</button>
          <br/>
        </form>
        {this.props.userInfo ? <Redirect to='/' /> : ''}
        {this.props.accountCreateSuccess ? <Redirect to='/login' /> : ''}
      </section>
    )
  }
}


const mstp = s => ({
  userInfo: s.users.userInfo,
  accountCreateSuccess: s.users.successfulAccountCreation
})

export default connect(mstp)(CreateAccount);