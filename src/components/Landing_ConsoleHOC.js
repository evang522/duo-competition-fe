//============================================ Import Dependencies ======================================>
import React from 'react';
import LandingPage from './LandingPage';
import UserConsole from './UserConsole';
import { connect } from 'react-redux';

//================================== Landing Page Console HOC ====================>
export class LandingConsoleHOC extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.loggedIn ? <UserConsole/> : <LandingPage/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.authToken
})

export default connect(mapStateToProps)(LandingConsoleHOC);