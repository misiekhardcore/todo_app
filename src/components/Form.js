import React from "react";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.inputText !== "")
      props.setTodos([
        ...props.todos,
        { text: props.inputText, completed: false, id: Math.random() * 1000 },
      ]);
    props.setInputText("");
  };

  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  return (
    <form>
      <div className="input">
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={props.inputText}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => props.setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
