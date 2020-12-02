import React, { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const getFromLocal = () => {
      if (localStorage.getItem("todos") !== null) {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    };

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

    const saveToLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    filerHandler(todos);
    saveToLocal();
  }, [todos, filter]);

  return (
    <div className="App">
      <Header />
      <Form
        todos={todos}
        setFilter={setFilter}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList
        todos={filteredTodos}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
      />
    </div>
  );
}

export default App;
