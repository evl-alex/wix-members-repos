import React from 'react';
import UserRow from '../components/UserRow'
import '../css/table.css';

function Table({ users }) {
   const userList = users.map((user) => {
      return <UserRow key={user.id} avatar={user.avatar_url} login={user.login} repo={user.repos_url}/>
   });

   return (
         <table>
            <thead>
            <tr>
               <th colSpan="2">WIX GitHub Members</th>
            </tr>
            <tr>
               <td>Image</td>
               <td>Name</td>
            </tr>
            </thead>
            <tbody>
            {userList}
            </tbody>
         </table>
      )
}

export default Table;