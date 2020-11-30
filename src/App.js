import React, { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getFromLocal = () => {
    if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    const filerHandler = () => {
      switch (filter) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filerHandler(todos);
    saveToLocal();
  }, [todos, filter]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setFilter={setFilter}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
