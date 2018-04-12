import React, {Component} from 'react';
import UserRepoContainer from '../decorators/UserRepoContainer';

class UserRow extends Component {
   state = { showRepos: false };

   toggleRepoList = () => {
      this.setState({
         showRepos: !this.state.showRepos
      });
   };

   render() {
      const {avatar, login, repo} = this.props;
      return (
         <React.Fragment>
            <tr>
               <td><img onClick={this.toggleRepoList} src={avatar} alt={login+'\'s avatar'} /></td>
               <td><span onClick={this.toggleRepoList}>{login}</span></td>
            </tr>
            {(this.state.showRepos) && <UserRepoContainer repo={repo}/> }
         </React.Fragment>
      );
   }
}

export default UserRow;