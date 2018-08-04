//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ChallengeBox} from '../components/Console_Challenges';

//================================== SearchForChallenges ====================>



export class SearchForChallenges extends Component {

  
  render() {
    const results = this.props.results.length ? this.props.results.map(item => <ChallengeBox challenge={item} /> ) : '';

    return (
      <section className='challenge-search-container'>
        <h2>Search for Challenges</h2>
        <input ref={me => this.searchInput = me} className='challenge-search-input' />
        <ul className='challenge-search-results'>
          {results || ''}
        </ul>
      </section>
    )
  }
}


const mapStateToProps = state => ({
  results: state.challenges.challengeSearchResults
})

export default connect(mapStateToProps)(SearchForChallenges);