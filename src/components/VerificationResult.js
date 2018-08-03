//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


//================================== Verification Result ====================>

export class VerificationResult extends Component {
  render() {
    const Success = () => (
      <div className='verify-duo-success'>
        <h2>Congrats!</h2>
        <br/>
        <p> According to Duolingo, you're legit!</p>
        <Link to='/'><button className='btn primary-button'>Get Started</button></Link>
      </div>
    )
    
    const Failure = () => (
        <div className='verify-duo-failure'>
        <h2>Aw Man...</h2>
        <br/>
        <p>Sorry, verification for your Duolingo Account Failed. After checking, it looks like your Bio did not contain the code we provided.</p>
        <button className='btn primary-button' onClick={() => this.props.resetStep()}>Retry?</button>
      </div>
    )

    return (
      <div>
        {this.props.verificationResult === 'success' ? <Success/> : ''}
        {this.props.verificationResult === 'failure' ? <Failure /> : ''}
      </div>

    )
  }

}

const mapStateToProps = state => ({
  verificationResult: state.users.verification.result
})

export default connect(mapStateToProps)(VerificationResult);