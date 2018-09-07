//============================================ Import Dependencies ======================================>
import * as types from './users.types';
import jwt from 'jsonwebtoken';

const initialState = {
  authToken:localStorage.getItem('authToken') || null,
  userInfo:jwt.decode(localStorage.getItem('authToken')) || null,
  successfulAccountCreation: false,
  verification:{
    duoUsername:null,
    tempCode:null,
    result:null
  }
}

const userReducer = (state=initialState, action) => {

  switch(action.type) {
  //================
    case types.SET_SUCCESSFUL_ACCOUNT_CREATION:
    return {
      ...state, 
      successfulAccountCreation: true
    }
  
  //=================
    case types.SET_VERIFICATION_RESULT:
      return {
        ...state,
        verification: {
          ...state.verification,
          result:action.result
        }
      }



  //================
    case types.SET_USER_VERIFIED:
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        verified:true
      }
    }
  
  //================
    case types.SAVE_TEMP_DUO_ID:
      return {
        ...state,
        verification: {
          ...state.verification,
          tempCode: action.id
        }
      }

  //==============
  case types.SAVE_DUOLINGO_USERNAME_STATE:
  {
    return {
      ...state, 
      verification: {
        ...state.verification,
        duoUsername:action.username
      }
    }
  }

  //===============
  case types.STORE_USER_INFO:
    return {
      ...state,
      userInfo: action.userInfo,
      authToken: action.token
    }


  //===============
    default: 
    return state;



  }
}

export default userReducer;