import React, { useState } from "react";

const Todo = (props) => {
  const [clicked, setClicked] = useState(false);
  const deletehandler = (e) => {
    setClicked(true);
    setTimeout(() => {
      const newTodos = props.todos.filter((todo) => todo.id !== props.todo.id);
      props.setTodos([...newTodos]);
    }, 1000);
  };

  const checkHandler = () => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === props.todo.id) {
          todo.completed = !props.todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div
      className={`todo ${props.todo.completed ? "completed" : ""} ${
        clicked ? "fall" : ""
      }`}
    >
      <li className="todo-item">{props.todo.text}</li>
      <button onClick={checkHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={(e) => deletehandler(e)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
