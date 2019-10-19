import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todosData,
    }
  }

  render() {
    const TodoItems = this.state.todo.map(todoData =>
      <TodoItem key={todoData.id} item={todoData} />)
    return (
      <div>{TodoItems}</div>
    );
  }
}

export default App;
