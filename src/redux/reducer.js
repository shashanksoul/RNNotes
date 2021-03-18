import {initialState} from './initialState';
import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

import {
  LOGIN,
  SIGNUP,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  CHECK_LOGIN_STATUS,
  Error_LOGIN_API,
  Error_SIGN_API,
  LOADING,
} from './actionTypes';

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
        loading: false,
        error: undefined,
        email: undefined,
        password: undefined,
      };
    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
        loading: false,
        error: undefined,
        email: undefined,
        password: undefined,
      };
    case UPDATE_EMAIL:
      return {...state, email: action.payload, errorSign: undefined,errorLogin:undefined};
    case UPDATE_PASSWORD:
      return {...state, password: action.payload, error: undefined,errorLogin:undefined};
    case CHECK_LOGIN_STATUS:
      return {...state, isSignedIn: action.payload};
    case Error_LOGIN_API:
      return {...state, errorLogin: action.payload, loading: false};
    case Error_SIGN_API:
      return {...state, errorSign: action.payload, loading: false};
    case LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
