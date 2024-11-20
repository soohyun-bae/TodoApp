import { useEffect, useState } from 'react'

import './App.css'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

function App() {
  const [todo, setTodo] = useState([])

  return (
    <>
      <Clock />
      <Advice />
      <InputTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  )
}

const Advice = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://korean-advice-open-api.vercel.app/api/advice")
      .then(res => res.json())
      .then(res => {
        setData(res)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      {!isLoading && (
        <div className='advice'>
          <div>{data.message}</div>
          <div>-{data.author}-</div>
        </div>
      )}
    </>
  )
}

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return (
    <div className='clock'>{time.toLocaleTimeString()}</div>
  )
}

export default App
