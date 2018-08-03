//============================================ Import Dependencies ======================================>
import axios from 'axios';
import {API_URL} from '../../config';

//================================== SYNC ACTIONS ====================>

export const STORE_USER_CHALLENGES = 'STORE_USER_CHALLENGES';
export const storeUserChallenges = challenges => ({
  type:STORE_USER_CHALLENGES,
  challenges
})





//================================== ASYNC ACTIONS  ====================>

export const fetchUserChallenges = () => (dispatch,getState) => {
    const query = {
      'url':`${API_URL}/api/challenges?members=${getState().users.userInfo.id}`,
      'method':'GET',
      'headers': {
        'content-type':'application/json',
        'Authentication':`Bearer ${getState().users.authToken}`
      }
    }

    axios(query)
      .then(response => {
        console.log(response.data);
      })
}