import React, { Component } from 'react';
import { Tasks } from '../api/task.js';
import { Meteor } from 'meteor/meteor';

import classnames from 'classnames';

// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() { //체크박스 선택시 체크여부 데이터 업데이트 
        // Tasks.update(this.props.task._id,{
        //     $set:{ checked: !this.props.task.checked},
        // });
        Meteor.call('tasks.setChecked',this.props.task._id, !this.props.task.checked);
    }
    deleteThisTask(){ //데이터 삭제 
        // Tasks.remove(this.props.task._id);
        Meteor.call('tasks.remove',this.props.task._id);
    }
    togglePrivate(){
      Meteor.call('tasks.setPrivate',this.props.task._id,! this.props.task.private);
    }
  render() {
      // const taskClassName = this.props.task.checked ? 'checked' : '' ;
      const taskClassName = classnames({
        checked:this.props.task.checked,
        private:this.props.task.private,
      });
      
      return (
        <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Private': 'Public' }
          </button>
        ): ''}

        <span className="text">
          <strong>
            {this.props.task.username}
          </strong> : {this.props.task.text}
        </span>
      </li>
      );
    }
  }