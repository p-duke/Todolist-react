import React, { Component } from 'react';

import Task from './Task';

export default class TaskList extends Component {

  render () {
    return (
      <ul>
         {this.props.tasks.map((task,i) => <Task key={i} data={task} />)}
      </ul>
    );
  }
}
