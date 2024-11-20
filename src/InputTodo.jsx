import React, { useRef, useState } from 'react';
import Todo from './Todo';

const InputTodo = ({ todo, setTodo }) => {
  const [visibleInput, setVisibleInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  // const inputRef = useRef(null)

  const toggleInput = () => {
    setVisibleInput((prev) => !prev)
  }

  const addTodo = () => {
    const newTodo = {
      id: Number(new Date()),
      content: inputValue,
    }
    const newTodoList =  [...todo, newTodo]
    setTodo(newTodoList)
    setInputValue('')
  }

  return (
    <>
    <div className='todoInput'>
      <div>
        <button onClick={toggleInput}>{visibleInput ? "⬆️" : "⬇️"}</button>
      </div>
      {visibleInput &&
        (<div>
          <input
          // ref={inputRef}
          type='text'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={addTodo}>➕</button>
        </div>)}
    </div>
    </>
  );
};


export default InputTodo;