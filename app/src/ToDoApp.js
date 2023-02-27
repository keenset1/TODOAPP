
import React, { useState } from 'react';
import './style.css';

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add "
        />
        <button className='button' type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;

