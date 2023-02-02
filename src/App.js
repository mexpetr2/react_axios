import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";

const API_URL = "https://todo-konexio.herokuapp.com/todo/";
const TOKEN = process.env.REACT_APP_TOKEN;
const header = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    axios
      .get(API_URL, header)
      .then((response) => setTodos(response.data))
      .catch((err) => console("err", err));
  };

  const postNewTodo = (newTodo) => {
    axios
      .post(API_URL, newTodo, header)
      .then((response) => setTodos((todos) => [...todos, response.data]))
      .catch((err) => console.log("err =>", err));
  };

  const deleteTodo = (id) => {
    console.log(id);
    axios
      .delete(API_URL + id, header)
      .then((response) => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => {
        console.log("delete error : ", err);
      });
  };

  const todoUpdate = (id, updatetodo) => {
    axios
      .put(id, updatetodo)
      .then((response) => setTodos((todos) => [...todos, response]));
  };

  return (
    <div className="App">
      <NewTodo postNewTodo={postNewTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todoUpdate={todoUpdate}
          deleteTodo={deleteTodo}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default App;
