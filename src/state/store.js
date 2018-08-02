//============================================ Import Dependencies ======================================>
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/users.reducer';


//================================== Construct State ====================>


const store = createStore(
  combineReducers({
    users:userReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
