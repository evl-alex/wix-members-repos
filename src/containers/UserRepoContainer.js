import React, {Component} from 'react';
import UserRepoList from '../components/UserRepoList';

class UserRepoContainer extends Component {
   state = {
      repos: [],
      loaded: false
   };

   componentDidMount() {
      fetch(this.props.repo)
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  repos: result,
                  loaded: true
               });
            },
            (error) => {
               this.setState({
                  repos: error,
                  loaded: true
               });
            }
         )
   }

   render() {

      return(
         this.state.loaded && <UserRepoList repos={this.state.repos} />
      )
   }
}

export default UserRepoContainer;