import React, {Component} from 'react';
import axios from 'axios';

export default class TaskForm extends Component {

  handleSubmit(event) {
    event.preventDefault();
    var task = this.refs.addTask;
    var config = {headers: {'Access-Control-Allow-Origin': 'http://localhost:3001'}}
    // var querystring = require('querystring');

    axios.post('http://localhost:3000/tasks',
    {
      description: task.value
    }, {
      headers: {
        "Access-Control-Allow-Origin" : "http://localhost:3001"
      }
    }).then(function (response) {
      debugger;
      this.props.updateTasks(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3001')
    //
    // var myInit = { method: 'POST',
    //                headers: myHeaders,
    //                mode: 'same-origin',
    //                data: task,
    //                cache: 'default' };
    //
    // fetch('http://localhost:3000/tasks', myInit)
    // .then(function(response) {
    //   console.log(response);
    // });


    // fetch('http://localhost:3000/tasks', {
    //   method: 'POST',
    //   dataType: 'JSON',
    //   headers: {'Content-Type' : 'application/json', 'Accept':'application/json'},
    //   body: JSON.stringify({
    //     description: task.value
    //   })
    // }).then(function(response) {
    //   debugger;
    // })
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
