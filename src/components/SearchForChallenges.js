//============================================ Import Dependencies ======================================>
import React, {Component} from 'react';
import { connect } from 'react-redux';


//================================== SearchForChallenges ====================>

export class SearchForChallenges extends Component {
  render() {
    return (
      <section className='challenge-search-container'>
        <h2> You aren't a part of any Challenges</h2>
        <p>Search for Challenges</p>
        
      </section>
    )
  }
}

export default connect()(SearchForChallenges);