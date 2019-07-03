import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; 
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/task.js';
import Task from './task.js';
import AccountUIWrapper from './AccountsUIWrapper.js';
 
// App component - represents the whole app
class App extends Component{
  renderTasks() { //리스트 목록 렌더링
    let filteredTasks = this.props.task;
    if(this.state.hideCompleted){
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    // return this.props.task.map((task) => (
    //   <Task key={task._id} task={task} />
    return filteredTasks.map((task)=>{
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task 
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
          />
      );
    });
  }
  handleSubmit = (e) =>{ //이벤트 처리
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    if(text !== ''){ // 값없이 삽이 되지 않게 설정 
      // Tasks.insert({ //DB에 데이터 삽입 
      //   text,
      //   createdAt: new Date(),
      //   owner: Meteor.userId(),
      //   username: Meteor.user().username,
      // });
      Meteor.call('tasks.insert',text);
      ReactDOM.findDOMNode(this.refs.textInput).value = '' ;
    }
    else{
      alert("please input your task");
    }
  }
  constructor(props){
    super(props);
    this.state = {
      hideCompleted:false,
    };
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>
          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
              />
              Hide Completed Tasks
          </label>
          <AccountUIWrapper/>
          { this.props.currentUser ?
           <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
             <input
             type="text"
             ref="textInput"
             placeholder="Type to add new tasks"
             />
           </form> : ''
          }
          {/* <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form> */}
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(()=> { //DB에서 데이터가져오기
  Meteor.subscribe('tasks');
  return {
    task: Tasks.find({},{ sort: {createdAt:-1}}).fetch(),
    incompleteCount: Tasks.find({checked:{$ne:true}}).count(),
    currentUser: Meteor.user(),
  };
})(App);

 
