import { initialState } from './initialState';
import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes';

import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from './actionTypes'

const user = (state =initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}


const rootReducer = combineReducers({
  user
})

export default rootReducer