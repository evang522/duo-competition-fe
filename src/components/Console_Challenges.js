//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/Console_Challenges.css';
import {fetchUserChallenges} from '../state/actions/challenges.actions';

//================================== Console_Challenges ====================>
export class ConsoleChallenges extends Component {

componentDidMount() {
  this.props.dispatch(fetchUserChallenges());
}

  render() {

    const mockData = [
      {
        'title':'Dumb Challenge',
        'members': ['creg','dana','bob'],
        'invites':['bob'],
        'status':'awaited',
        'description':'A cool, but dumb challenge'
      },
      {
        'title':'Dumb Challenge 2',
        'members': ['creg','dana','bob'],
        'invites':['bob'],
        'status':'awaited',
        'description':'A cool, but dumb challenge'
      }

    ];

    const ChallengeBox = props => (
      <div className='challenge-box col-sm-8'>
        <p>Title: {props.challenge.title}</p>
        <p> {props.challenge.members.length} Members</p>

      </div>
    )

    const ChallengeList = mockData.map(entry => <ChallengeBox challenge={entry}/>);

    return (
      <section className='console-challenges-container'>
        <h2>Your Challenges</h2>
        <ul className='row challenge-list-user'>{ChallengeList || ''}</ul>
          
      </section>
    )
  }

}


export default connect()(ConsoleChallenges);