import * as types from './challenges.types';

//============================================ Import Dependencies ======================================>

const initialState = {
  currentChallenge: null,
  challengeSearchResults:[],
  challengeComments:[],
  userChallenges:[]
}

const challengeReducer = (state=initialState, action) => {
  switch(action.type) {

  //================
  case types.STORE_USER_CHALLENGES:
    return {
      ...state,
      userChallenges:action.challenges
    }

  //=================
    default: 
    return state;
  }
}

export default challengeReducer;