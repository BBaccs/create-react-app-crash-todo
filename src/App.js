import React, { Component } from 'react';
import Todos from './components/Todos';
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

  render() {
    return (
      <div>
        <h1> To Scooby dOoO</h1>
          <Todos todos={ this.state.todos } toggleComplete={ this.toggleComplete }/>
      </div>
    )
  }
}

export default App
