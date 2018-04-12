import React from 'react';

function Repo(props) {
   return (
      <tr>
         <td colSpan='2'><a href={props.url}>{props.name}</a></td>
      </tr>
   )
}

function UserRepoList(props) {
   const {repos} = props;
   let repoList;

   if (repos.length > 0) {
      repoList = repos.map((repo) =>{
         return <Repo key={repo.id} name={repo.name} url={repo.html_url} />
      })
   } else {
      repoList = <tr><td colSpan='2'>No active repositories</td></tr>;
   }

   return (
      <React.Fragment>
         {repoList}
      </React.Fragment>
   )
}

export default UserRepoList;