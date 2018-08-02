//============================================ Import Dependencies ======================================>
import axios from 'axios';
import {API_URL} from '../../config';
import jwt from 'jsonwebtoken';

//================================== SYNC ACTIONS ====================>

export const STORE_USER_INFO = 'STORE_USER_INFO';
export const storeUserInfo = (userInfo,token) => ({
  type: STORE_USER_INFO,
  userInfo,
  token
})


export const SET_SUCCESSFUL_ACCOUNT_CREATION ='SET_SUCCESSFUL_ACCOUNT_CREATION';
export const setSuccessfulAccountCreation = () => ({
  type:SET_SUCCESSFUL_ACCOUNT_CREATION
})

export const SAVE_DUOLINGO_USERNAME_STATE = 'SAVE_DUOLINGO_USERNAME_STATE';
export const saveDuolingoUsernameState = username => ({
  type:SAVE_DUOLINGO_USERNAME_STATE,
  username
})

export const SET_USER_VERIFIED = 'SET_USER_VERIFIED';
export const setUserVerified = () => ({
  type:SET_USER_VERIFIED
})


export const SAVE_TEMP_DUO_ID = 'SAVE_TEMP_DUO_ID';
export const saveTempDuoId = id => ({
  type:SAVE_TEMP_DUO_ID,
  id
})


//================================== ASYNC Actions ====================>


export const login = (email, password) => dispatch => {

  const user = {
    email,
    password
  }

  const query = {
    'url':`${API_URL}/api/auth/login`,
    method: 'POST',
    headers: {
      'content-type':'application/json', 
    },
    data: JSON.stringify(user)
  }

  axios(query)
    .then(response => {
      if (response.data.status === 403) {
        console.log('error logging in:', response.data.message)
      } else if (response.data.authToken) {
        localStorage.setItem('authToken', response.data.authToken);
        dispatch(storeUserInfo(jwt.decode(response.data.authToken), response.data.authToken));
      }
    })
    .catch(err => {
      return;
    })
}



//================================== Register ====================>

export const register = (name, email, password) => dispatch => {

  const user = {
    name,
    email,
    password
  }

  const query = {
    'url': `${API_URL}/api/users`,
    data: JSON.stringify(user),
    headers: {
      'content-type':'application/json'
    },
    method:'POST'
  }

  axios(query)
    .then(response => {
      console.log(response.data);
    })

}

//================================== Generate DUO ID ====================>
export const generateDuoId = userId => dispatch => {
  const query = {
    url: `${API_URL}/api/users/${userId}?action=verifyDuoAccount&step=generateId`,
    headers: {
      'content-type':'application/json',
      // TODO ADD AUTHENTICATION HEADER
    },
    method:'PUT'
  }

  axios(query)
    .then(response => {
      dispatch(saveTempDuoId(response.data.id))
    })
    .catch(err => {
      console.log(err);
    }) 

}

export const verifyDuoCode = (duoUsername,userId) => dispatch => {
  const query = {
    url: `${API_URL}/api/users/${userId}?action=verifyDuoAccount&step=verifyId`,
    data: JSON.stringify({duoUsername}),
    method: 'PUT',
    headers: {
      //TODO ADD AUTHENTICATION HEADER
      'content-type':'application/json'
    }
  }

  axios(query)
    .then(response => {
      if (response.status === 200) {
        if (response.data.verification === 'success') {
          dispatch(setUserVerified());
        }
      }
    })
    .catch(err => {
      console.log(err);
    })
}