//================================== Import Dependencies ====================>
import React, {Component} from 'react';
import './styles/LandingPage.css';


//================================== Landing Page Component ====================>
export class LandingPage extends Component {
  render() {
    return (
      <section className='landing-page-section'>
        <h1> Welcome to Duelingo!</h1>
        <p>Compete with your friends to inspire language acquisition!</p>
        <div className='lp-instructions-container row'>
          <div className='lp-instructions-instance col-sm-3'>
            <h3> Create an Account</h3>
            <p>First, create an account with Duelingo. This allows you to log in, search for, join, and host Duolingo competitions, and more.</p>
          </div>
          <div className='lp-instructions-instance col-sm-3'>
            <h3> Connect Duolingo</h3>
            <p>To ensure you own the duolingo account that you'll be connecting, we will generate a code for you to paste in your Duolingo Bio. Once you've pasted the code in your Bio, we'll verify your account with Duolingo.</p>
          </div>
          <div className='lp-instructions-instance col-sm-3'>
            <h3> Join/Host Duels</h3>
            <p>Once you've verified your duolingo account, you'll be able to create competitions and invite others to join. Whoever has the most points after a specified amount of time wins!</p>
          </div>
        </div>

        <button className='btn btn-success create-account-button'>Get Started!</button>
      </section>

    )
  }
}

export default LandingPage;