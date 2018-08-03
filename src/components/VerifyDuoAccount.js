//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import './styles/VerifyDuoAccount.css';
import { saveDuolingoUsernameState, generateDuoId, verifyDuoCode } from '../state/actions/users.actions';
import {connect} from  'react-redux';
import VerificationResult from './VerificationResult';

//================================== VerifyDuoAccount ====================>




export class VerifyDuoAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step:1,
    }
  }
  
  incrementStep() {
    console.log('increment step ran');
    let currentStep = this.state.step;
    this.setState({
      step: currentStep+1
    })
  }

  decrementStep() {
    let currentStep = this.state.step;
    this.setState({
      step: currentStep-1
    })
  }

  resetStep = ()  => {
    this.setState({
      step:1
    })
  }

  saveUserNameAndGenerateId() {
    if (!this.duoUserInput.value) {
      return;
    }
    this.props.dispatch(saveDuolingoUsernameState(this.duoUserInput.value));
    this.props.dispatch(generateDuoId(this.props.userId));
    this.incrementStep();
  }

  verifyDuoAccountCode() {
    this.incrementStep();
    this.props.dispatch(verifyDuoCode(this.props.duoUsername, this.props.userId));
  }

  render() {

    const Step1 = () => (
      <div className='verify-duo-step1'>
        <h2>Let's Verify Your Duolingo Account</h2>
        <img src='img/Duo.png'alt='Duo Owl'/>
        <p >We'll guide you through a simple verification that you own the duolingo account you'll be working with on Duelingo. This helps us ensure the integrity of challenges.</p>
        <button onClick={e => this.incrementStep()} className='btn btn-success continue-button'>Continue</button>
      </div>
    )

    const Step2 = () => (
      <div className='verify-duo-step2'>
        <h2> Please provide your Duolingo username</h2>
        <input ref={me => this.duoUserInput = me} className='duo-username-input'/>
        <br/>
        <button onClick={e => this.saveUserNameAndGenerateId()} className='btn btn-success continue-button'>Continue</button>

      </div>
    )

    const Step3 = () => (
      <div className='verify-duo-step3'>
        <h2> Copy this code to your Duolingo Bio</h2>
        <div className='code-box'>{this.props.tempId || ''}
        </div>
        <p className='instructions-step3'>
          Once you've pasted this code into your Duolingo Bio, click the 'Verify' button below and we'll check with Duolingo to ensure that your Bio contains this code.
          <br/>
          <br/>
          Make sure you copy *only* this code to your Bio. You can remove it after the verification process. Until that, the code should be the only thing in your bio.
        </p>
        <br/>
        <button onClick={() => this.verifyDuoAccountCode()} className='btn btn-success continue-button'>Verify</button>

      </div>
    )

    return (
      <section className='verify-duo-container'>
        {this.state.step === 1 ? <Step1/> : ''}
        {this.state.step === 2 ? <Step2/> : ''}
        {this.state.step === 3 ? <Step3/> : ''}
        {this.state.step === 4 ? <VerificationResult resetStep={this.resetStep}/> : ''}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.users.userInfo ? state.users.userInfo.id : null,
  tempId: state.users.verification.tempCode ? state.users.verification.tempCode : '',
  verified: state.users.userInfo ? state.users.userInfo.verified : null,
  duoUsername: state.users.verification ? state.users.verification.duoUsername : null
})

export default connect(mapStateToProps)(VerifyDuoAccount);