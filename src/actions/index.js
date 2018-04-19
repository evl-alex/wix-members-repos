import { createAction } from 'redux-actions';

export const REQUEST_USERS = 'REQUEST_USERS';
export const MARK_FETCHING_FAILED = 'MARK_FETCHING_FAILED';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestUsers = createAction(REQUEST_USERS);
export const markFetchingFailed = createAction(MARK_FETCHING_FAILED);
export const receiveUsers = createAction(RECEIVE_USERS);

export function fetchUsers(url) {
   return function (dispatch){
      dispatch(requestUsers());
      return fetch(url)
         .then(
            response => response.json(),
            error => dispatch(markFetchingFailed(error))
         )
         .then(json => dispatch(receiveUsers(json)));
   }
}