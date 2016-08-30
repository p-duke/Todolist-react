import React, { Component } from 'react';

import Task from './Task';

export default class TaskList extends Component {

  render () {
    console.log('tasklist props', this.props)
    return (
      <ul>
         {this.props.tasks.map((task,i) => <Task key={i} data={task} />)}
      </ul>
    );
  }
}
