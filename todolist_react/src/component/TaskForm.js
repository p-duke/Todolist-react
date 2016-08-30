import React, {Component} from 'react';
import axios from 'axios';

export default class TaskForm extends Component {

  handleSubmit(event) {
    event.preventDefault();
    var task = this.refs.addTask;

    axios.post('http://localhost:3000/tasks',
    {
      description: task.value
    }, {
      headers: {
        "Access-Control-Allow-Origin" : "http://localhost:3001"
      }
    }).then((response) => {
      this.props.onUpdate(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <setion>
        <p>Create a New Task</p>
        <form id="newtask-form" onSubmit={this.handleSubmit.bind(this)}>
          <input ref='addTask' type='text' name='task[description]' placeholder='enter a new task' />
          <input ref="submitButton" type="submit" value="Create" />
        </form>
      </setion>
    );
  }
}
