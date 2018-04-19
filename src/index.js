import React from 'react';
import ReactDOM from 'react-dom';
import UserListContainer from "./containers/UserListContainer";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchUsers } from './actions'

const store = createStore( rootReducer, applyMiddleware(thunkMiddleware) );
const unsubscribe = store.subscribe(() => console.log("State: ", store.getState()));
console.log(store.getState());

store.dispatch(fetchUsers('https://api.github.com/orgs/wix/members'));

ReactDOM.render(
   <Provider store={store}>
      <UserListContainer />
   </Provider>,
   document.getElementById('root')
);
