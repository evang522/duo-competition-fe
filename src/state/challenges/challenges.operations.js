import {API_URL} from '../../config';
import axios from 'axios';

import {
  storeUserChallenges
} from './challenges.actions';


//================================== ASYNC ACTIONS  ====================>
const fetchUserChallenges = () => (dispatch,getState) => {
    const query = {
      'url':`${API_URL}/api/challenges?members=${getState().users.userInfo.id}`,
      'method':'GET',
      'headers': {
        'content-type':'application/json',
        'Authorization':`Bearer ${getState().users.authToken}`
      }
    }

    axios(query)
      .then(response => {
        dispatch(storeUserChallenges(response.data));
      })
}


export {
    fetchUserChallenges
}