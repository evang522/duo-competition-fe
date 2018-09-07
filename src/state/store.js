//============================================ Import Dependencies ======================================>
import { 
  applyMiddleware,
  createStore,
  combineReducers
 } from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './users/users.index';
import {challengeReducer} from './challenges/challenges.index';

//================================== Construct State ====================>


const store = createStore(
  combineReducers({
    users:userReducer,
    challenges:challengeReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
