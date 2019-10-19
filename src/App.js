import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from './todosData';

function App() {

  const TodoItems = todosData.map(todoData =>
    <TodoItem key={todoData.id} item={todoData} />)

  return (
    <div>{TodoItems}</div>
  );
}

export default App;
