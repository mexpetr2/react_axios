import React from "react";
import { useState } from "react";

export default function NewTodo({ postNewTodo }) {
  const [newTodo, setNewTodo] = useState({
    todo: "",
    details: "",
    isDone: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewTodo(newTodo);
  };

  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
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
          value={newTodo.todo}
          name="todo"
          type="text"
        />

        <label htmlFor="details">Detailles</label>
        <input
          value={newTodo.details}
          onChange={handleChange}
          name="details"
          type="text"
        />

        <label htmlFor="isDone">is done</label>
        <input
          value={newTodo.isDone}
          onChange={handleChange}
          name="isDone"
          type="checkbox"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
