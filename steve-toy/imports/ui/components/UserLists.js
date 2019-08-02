import React,{Component} from 'react';
import { Input } from 'semantic-ui-react';
import UserList from '../components/UserList';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

export default observer(class UserLists extends Component {
  state = observable({
    search: '',
  })

  handleChange = (e) => {
    this.state.search = e.target.value;
  }

  renderSearchUser =()=>{
    const { users, isReady, selectUser } = this.props;

    const searched = users.filter(user =>{
      return user.profile.userName.indexOf(this.state.search) > -1;
    });
    
    if(!isReady) {
      return null;
    }

    return searched.map(user => <UserList key={user._id} {...user} selectUser={selectUser}/>)
  }
  render(){
    return(
      <div>
        <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange} value={this.state.search}/>
        <div className="userscroll">
          {this.renderSearchUser(this.props.users)}
        </div>
      </div>
    );
  }
});

