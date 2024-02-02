import { useState, useEffect } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todo} from './components/Todo'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    try{
      setInterval(()=> {
        const temp = async function () {
          const response = await axios.get("http://localhost:3000/todos");
          setTodos(response.data.todos)
        }
        temp();
      },8000)
    }
    catch (error) {
      // console.error("Error Occured: ", error);
    }
    
  },[]);

  return <>
    <CreateTodo/>
    {todos.map((todo)=> {
      return <Todo key ={todo._id} todo={todo}></Todo>
    })}
  </>
}

export default App
