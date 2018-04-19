import { combineReducers } from 'redux';
import { REQUEST_USERS, MARK_FETCHING_FAILED, RECEIVE_USERS } from "../actions";

const initialOrgMembersState = {
   isFetching: false,
   fetchingFailed: false,
   users: []
};

export default function reducer(state = initialOrgMembersState, action) {
   switch (action.type) {
      case REQUEST_USERS:
         return Object.assign({}, state, {
            isFetching: true,
            fetchingFailed: false
         });
      case MARK_FETCHING_FAILED:
         console.log("Fetching failed: ", action.payload);
         return Object.assign({}, state, {
            isFetching: false,
            fetchingFailed: true
         });
      case RECEIVE_USERS:
         return Object.assign({}, state, {
            isFetching: false,
            fetchingFailed: false,
            users: action.payload
         });
      default:
         return state;
   }
}