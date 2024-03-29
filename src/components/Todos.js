import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem key={ todo.id } todo={ todo } toggleComplete={ this.props.toggleComplete } deleteTodo={ this.props.deleteTodo } />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
