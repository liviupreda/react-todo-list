import React, { Component } from 'react';

class Todo extends Component {
  static defaultProps = {
    todo: 'Test'
  };

  render() {
    return (
      <div>
        <h1>Todo: {this.props.todo}</h1>
      </div>
    );
  }
}

export default Todo;
