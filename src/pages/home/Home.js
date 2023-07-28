import "./home.css";
import { UserForm } from "../../components/userForm/UserForm";
import { TodoItem } from "../../components/todoItem/TodoItem";

import React from "react";

export const Home = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = todo => {
    setTodos(prev => [...prev, todo]);
  };

  return (
    <div className="home">
      <UserForm addTodo={addTodo} />
      <TodoItem todos={todos} />
    </div>
  );
};
