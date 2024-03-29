import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css'

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish React Video',
        completed: true
      },
      {
        id: 2,
        title: 'Tape Ankle',
        completed: false
      },
      {
        id: 3,
        title: 'Get some R&R, Chill',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={ this.state.todos } toggleComplete={ this.toggleComplete } deleteTodo={this.deleteTodo } />
        </div>
      </div>
    )
  }
}

export default App
