//============================================ Import Dependencies ======================================>
import axios from 'axios';
import {API_URL} from '../../config';
import jwt from 'jsonwebtoken';
import * as types from './users.types';

//================================== SYNC ACTIONS ====================>

export const storeUserInfo = (userInfo,token) => ({
  type: types.STORE_USER_INFO,
  userInfo,
  token
})


export const setSuccessfulAccountCreation = () => ({
  type: types.SET_SUCCESSFUL_ACCOUNT_CREATION
})

export const saveDuolingoUsernameState = username => ({
  type: types.SAVE_DUOLINGO_USERNAME_STATE,
  username
})

export const setUserVerified = () => ({
  type: types.SET_USER_VERIFIED
})


export const saveTempDuoId = id => ({
  type: types.SAVE_TEMP_DUO_ID,
  id
})

export const setVerificationResult = result => ({
  type: types.SET_VERIFICATION_RESULT,
  result
})

