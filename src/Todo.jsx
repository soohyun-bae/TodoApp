import React, { useState } from 'react';

const Todo = ({ todo, setTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(todo.content)

  const toggleEditing = () => {
    if (isEditing) {
      setTodo((prev) =>
        prev.map((each) => 
          each.id === todo.id ? {...each, content:inputValue} : each)
        )
    }
    setIsEditing((prev) => !prev)
  }

  const inputChange = (event) => {
    setInputValue(event.target.value)
  }

  const deleteList = () => {
    setTodo((prev) => {
      return prev.filter((el) => el.id !== todo.id)
    })
  }


  return (
    <li>
      <input
        type='checkbox'
        className='checkbox' />
      {isEditing ? (
        <input
          type='text'
          value={inputValue}
          onChange={inputChange}
        />
      ) : (
        <div className='liInput'>{todo.content}</div>
      )}
      <div className='buttons'>
        <button
          onClick={toggleEditing}
        >{isEditing ? "✔️" : "✏️"}</button>
        <button
          onClick={deleteList}
        >❌</button>
      </div>
    </li>
  );
};

export default Todo;