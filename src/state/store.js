//============================================ Import Dependencies ======================================>
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/users.reducer';
import challengeReducer from './reducers/challenge.reducer';

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
