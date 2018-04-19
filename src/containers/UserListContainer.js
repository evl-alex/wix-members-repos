import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table.js';

const mapStateToProps = state => {
   return {
      users: state.users
   }
};

const UserListContainer = connect(
   mapStateToProps
)(Table);

export default UserListContainer;