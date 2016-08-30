import React, { Component } from 'react';

export default class Task extends Component {

  render() {
    return(
      <li>
        {this.props.data.description}
      </li>
    );
  }

}
