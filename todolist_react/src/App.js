import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.updateTasks = this.updateTasks.bind(this);
  }

  componentDidMount() {
      axios.get('http://localhost:3000/tasks')
    .then((response) => {
      this.setState({tasks: response.data});
      console.log('state', this.state.tasks);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateTasks(task) {
    this.setState({tasks: [task.data].concat(this.state.tasks)});
  }

  render() {
    console.log('app state', this.state.tasks)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the TodoList!</h2>
        </div>
        <ul className="App-intro">

          <TaskForm onUpdate={this.updateTasks}/>
          <TaskList tasks={this.state.tasks}/>
        </ul>
      </div>
    );
  }
}

export default App;
