import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state=initialState.users, action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS_SUCCESS:
      return action.users
    default:
      return state
      
  }
}