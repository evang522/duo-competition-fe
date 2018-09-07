import * as types from './users.types';
import axios from 'axios';
import {API_URL} from '../../config';
import jwt from 'jsonwebtoken';
import {
    storeUserInfo,
    setSuccessfulAccountCreation,
    saveDuolingoUsernameState,
    setUserVerified,
    saveTempDuoId,
    setVerificationResult
} from './users.actions';

const login = (email, password) => (dispatch,store) => {

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
  
    const register = (name, email, password) => dispatch => {
  
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
  const generateDuoId = userId => (dispatch,getState) => {
    const query = {
      url: `${API_URL}/api/users/${userId}?action=verifyDuoAccount&step=generateId`,
      headers: {
        'content-type':'application/json',
        'Authorization':`Bearer ${getState().users.authToken}`
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
  
  const verifyDuoCode = (duoUsername,userId) => (dispatch,getState) => {
    const query = {
      url: `${API_URL}/api/users/${userId}?action=verifyDuoAccount&step=verifyId`,
      data: JSON.stringify({duoUsername}),
      method: 'PUT',
      headers: {
        'Authorization':`Bearer ${getState().users.authToken}`,
        'content-type':'application/json'
      }
    }
  
    axios(query)
      .then(response => {
          if (response.data.verificationStatus === 'success') {
            dispatch(setVerificationResult('success'));
            dispatch(setUserVerified());
        } else {
          dispatch(setVerificationResult('failure'));
        }
      })
      .catch(err => {
        console.log(err);
      })
  }


  export {
      login,
      register,
      generateDuoId,
      verifyDuoCode
  }