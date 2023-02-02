import React from "react";
import { useState } from "react";

export default function UpdateTodo({ todoUpdate, id }) {
  const [updatedTodo, setUpdatedTodo] = useState({
    todo: "",
    details: "",
    isDone: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedTodo);
    todoUpdate("https://todo-konexio.herokuapp.com/todo/" + id, updatedTodo);
  };

  const handleChange = (e) => {
    setUpdatedTodo({
      ...updatedTodo,
      [e.target.name]:
        e.target.name === "isDone" ? e.target.checked : e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="post">
        <label htmlFor="todo">Todo</label>
        <input
          onChange={handleChange}
          value={updatedTodo.todo}
          name="todo"
          type="text"
        />

        <label htmlFor="details">Detailles</label>
        <input
          value={updatedTodo.details}
          onChange={handleChange}
          name="details"
          type="text"
        />

        <label htmlFor="isDone">is done</label>
        <input
          value={updatedTodo.isDone}
          onChange={handleChange}
          name="isDone"
          type="checkbox"
        />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
