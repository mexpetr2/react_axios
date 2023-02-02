import React, { useState } from "react";
import UpdateTodo from "./UpdateTodo";

export default function Todo({ todo, deleteTodo, todoUpdate }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const handleClick = () => {
    setShowUpdate(!showUpdate);
  };

  return (
    <div style={{ backgroundColor: "#a99985" }}>
      {showUpdate ? (
        <UpdateTodo id={todo._id} todoUpdate={todoUpdate} />
      ) : (
        <>
          <h2>{todo.todo}</h2>
          <p>{todo.details}</p>
          <p>{todo.isDone ? "✅" : "❌"}</p>

          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          <button onClick={handleClick}>Update</button>
        </>
      )}
    </div>
  );
}
