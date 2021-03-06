import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const TodoItems = this.state.todos.map(todoData =>
      <TodoItem key={todoData.id} item={todoData} handleChange={this.handleChange} />)
    return (
      <div>{TodoItems}</div>
    );
  }
}

export default App;
