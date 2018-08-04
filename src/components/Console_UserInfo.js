//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/Console_UserInfo.css';

//================================== Console User Info ====================>
export class ConsoleUserInfo extends Component {

render() {
  return (
    <section className='console-user-info'>
      <h2>Your User Info</h2>
      <p className='user-name'>{this.props.userInfo.name || ''}</p>
      <p className='user-email'>{this.props.userInfo.email || ''}</p>  
      <p className='user-duo-verified'>{this.props.userInfo.verified ? 'Duo Verified':'Not Verified on Duolingo' }</p>
    </section>
  ) 


  }
}

const mapStateToProps = state => ({
  userInfo:state.users.userInfo
})

export default connect(mapStateToProps)(ConsoleUserInfo);