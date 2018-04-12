import React, {Component} from 'react';
import Table from '../components/Table.js';

class UserListContainer extends Component {
   state = { users: [] };

   componentDidMount() {
      fetch("https://api.github.com/orgs/wix/members")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  users: result
               });
            },
            (error) => {
               this.setState({
                  users: error
               });
            }
         )
   }

   render() {
      return(
         <Table users={this.state.users} />
      )
   }
}

export default UserListContainer;