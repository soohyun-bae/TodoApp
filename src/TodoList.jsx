import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todo, setTodo }) => {
  return (
    <>
      <ul>
        {todo.map((each) => (
          <Todo key={each.id} todo={each} setTodo={setTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList;
