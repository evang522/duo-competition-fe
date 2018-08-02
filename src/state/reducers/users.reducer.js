//============================================ Import Dependencies ======================================>
import {STORE_USER_INFO, SET_SUCCESSFUL_ACCOUNT_CREATION, SAVE_DUOLINGO_USERNAME_STATE, SAVE_TEMP_DUO_ID, SET_USER_VERIFIED} from '../actions/users.actions';
import jwt from 'jsonwebtoken';


const initialState = {
  authToken:localStorage.getItem('authToken') || null,
  userInfo:jwt.decode(localStorage.getItem('authToken')) || null,
  successfulAccountCreation: false,
  verification:{
    duoUsername:null,
    tempCode:null,

  }

}

const userReducer = (state=initialState, action) => {

  switch(action.type) {
  //================
    case SET_SUCCESSFUL_ACCOUNT_CREATION:
    return {
      ...state, 
      successfulAccountCreation: true
    }

  //================
    case SET_USER_VERIFIED:
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        verified:true
      }
    }
  
  //================
    case SAVE_TEMP_DUO_ID:
      return {
        ...state,
        verification: {
          ...state.verification,
          tempCode: action.id
        }
      }

  //==============
  case SAVE_DUOLINGO_USERNAME_STATE:
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
  case STORE_USER_INFO:
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