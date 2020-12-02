import React, { useState } from "react";
import styled from "styled-components";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;
`;

const TodosList = styled.ul`
  width: 100%;
  max-width: 40rem;
  list-style: none;
`;

const TodoItem = styled.li`
  margin-bottom: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  transition: all 500ms ease-in-out;

  & p {
    padding: 0.5rem;
    flex: 1;
  }

  &.transitions-enter {
    opacity: 0;
    transform: scale(0);
  }

  &.transitions-exit {
    transform: translateY(10rem) rotateZ(20deg);
    opacity: 0;
  }

  &.transition-complete {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;

const TodoList = (props, id) => {
  return (
    <Container>
      <TransitionGroup component={TodosList}>
        {props.todos.map((todo) => (
          <CSSTransition key={todo.id} timeout={300} classNames="transitions">
            <TodoItem className={todo.completed && "transition-complete"}>
              <p>{todo.text}</p>
              <Button
                onClickHandler={() => props.checkTodo(todo.id)}
                variant="complete"
              >
                <i className="fas fa-check"></i>
              </Button>
              <Button onClickHandler={() => props.removeTodo(todo.id)}>
                <i className="fas fa-trash"></i>
              </Button>
            </TodoItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default TodoList;
