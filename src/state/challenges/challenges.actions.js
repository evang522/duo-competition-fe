//============================================ Import Dependencies ======================================>
import * as types from './challenges.types';

//================================== SYNC ACTIONS ====================>


export const storeUserChallenges = challenges => ({
  type: types.STORE_USER_CHALLENGES,
  challenges
})

