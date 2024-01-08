import React, { useRef, useState } from "react";
import itemsList from "./itemsList";
import "./App";

function TodoForm({ TodoNew }) {
  const [todos, setTodos] = useState(itemsList);
  const nameRef = useRef();
  const dateRef = useRef();

  const addTaskClick = () => {
    const name = nameRef.current.value;
    const date = dateRef.current.value;

    if (name && date) {
      const formattedDate = new Date(date).toLocaleDateString("en-GB");

      TodoNew({
        name,
        deadline: formattedDate,
      });

      nameRef.current.value = "";
      dateRef.current.value = "";

      nameRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input type="text" placeholder="Enter a Task" ref={nameRef} />
      <input type="date" ref={dateRef} />
      <button className="addButton" onClick={addTaskClick}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
