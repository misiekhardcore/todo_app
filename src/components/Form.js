import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto 0.5rem;
  flex-direction: column;

  @media (min-width: 40rem) {
    & {
      flex-direction: row;
      padding: 0;
    }
  }
`;

const InputGroup = styled.div`
  width: 100%;

  & input {
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    min-width: 1rem;
    font-family: inherit;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    background: white;
  }

  display: flex;
  margin-bottom: 0.5rem;

  @media (min-width: 40rem) {
    & {
      margin: 0;
    }
  }
`;

const SelectGroup = styled.div`
  width: 100%;
  min-width: 10rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #ff6f47;
    cursor: pointer;
    pointer-events: none;
  }

  & select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: none;
    padding: 0.5rem;
    color: #ff6f47;
    font-family: inherit;
    font-size: 1.5rem;
    cursor: pointer;
    width: 100%;

    @media (min-width: 40rem) {
      & {
        margin-left: 0.5rem;
      }
    }
  }

  @media (min-width: 40rem) {
    & {
      max-width: 15rem;
    }
  }
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <InputGroup>
        <input
          onChange={inputTextHandler}
          type="text"
          value={props.inputText}
        />
        <Button type="submit" onClickHandler={() => {}}>
          <i className="fas fa-plus-square"></i>
        </Button>
      </InputGroup>
      <SelectGroup>
        <select name="todos" onChange={(e) => props.setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </SelectGroup>
    </StyledForm>
  );
};

export default Form;
