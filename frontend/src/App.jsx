import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'
import axios from 'axios'


// issues || tasks
// render network for backend
// vercel for frontend



function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos",{
    method: "GET"
  })
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos)
    })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
