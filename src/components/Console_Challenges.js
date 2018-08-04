//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/Console_Challenges.css';
import {fetchUserChallenges} from '../state/actions/challenges.actions';
import SearchForChallenges from '../components/SearchForChallenges';

export const ChallengeBox = props => (
  <div className='challenge-box col-sm-8'>
    <p>Title: {props.challenge.title}</p>
    <p> {props.challenge.members.length} Members</p>

  </div>
)

//================================== Console_Challenges ====================>
export class ConsoleChallenges extends Component {


componentDidMount() {
  this.props.dispatch(fetchUserChallenges());
}

  render() {
    const ChallengeList = this.props.userChallenges ? this.props.userChallenges.map((entry,key) => <ChallengeBox key={key} challenge={entry}/>) : '';

    return (
      <section className='console-challenges-container'>
        <h2>Your Challenges</h2>
        <ul className='row challenge-list-user'>{ChallengeList || ''}</ul>

        <SearchForChallenges/>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  userChallenges: state.challenges.userChallenges
})

export default connect(mapStateToProps)(ConsoleChallenges);