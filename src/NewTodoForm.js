import React, { Component } from 'react';
import uuid from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Enter task: </label>
        <input
          type='text'
          placeholder='New Todo'
          name='task'
          id='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewTodoForm;
