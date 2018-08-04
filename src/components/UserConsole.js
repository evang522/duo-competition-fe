//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles/UserConsole.css';
import ConsoleChallenges from './Console_Challenges';
import ConsoleUserInfo from '../components/Console_UserInfo';


//================================== User Console ====================>
export class UserConsole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModule: 'challenges'
    }
  }

  render() {
    return (
      <section className='user-console-container'>
        <nav className='console-navbar'>
          <ul>
            <li className={this.state.currentModule === 'challenges' ? 'selected-console-option' : ''} onClick={() => this.setState({currentModule:'challenges'})}>Challenges</li>
            <li className={this.state.currentModule === 'userInfo' ? 'selected-console-option' : ''} onClick={() => this.setState({currentModule:'userInfo'})}>User Info</li>
            <li className={this.state.currentModule === 'posts' ? 'selected-console-option' : ''} onClick={() => this.setState({currentModule:'posts'})}>Your posts</li>
          </ul>
        </nav>
        {this.state.currentModule === 'challenges' ? <ConsoleChallenges/>  : ''}
        {this.state.currentModule === 'userInfo' ? <ConsoleUserInfo /> : ''}
      </section>
    )
  }
}

export default connect()(UserConsole);