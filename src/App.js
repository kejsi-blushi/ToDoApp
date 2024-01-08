import React, { useState } from "react";
import itemsList from "./itemsList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(itemsList);
  const [filterText, setFilterText] = useState("");

  const addTask = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTask = (index) => {
    const list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredAndSortedTodos = todos
    .filter((todo) =>
      todo.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Filter Task"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredAndSortedTodos.map((todo, index) => (
          <li key={index}>
            {todo.name} - Deadline: {todo.deadline}
            <button
              className="delete-button"
              name="delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <TodoForm TodoNew={addTask} />
    </div>
  );
}

export default App;
