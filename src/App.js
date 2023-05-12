import React, {useRef} from "react";
import TodoList from "./TodoList";
import  {v4 as uuidv4} from 'uuid'
import useLocalStorage from "use-local-storage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './App.css'



function App() {
  
  const [todos, setTodos] = useLocalStorage("user", [{name: "This is a default task", id: uuidv4(), complete: false}])
  const TodoNameRef = useRef()
  const uuid = uuidv4()
  
  function toggleTodo(id){
    const newTodos = [...todos] 
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(){
    const name = TodoNameRef.current.value

    if(!name){
      alert("Task must have a name")
      return
    }
   
    setTodos(prev => {
      return [...prev, {name: name, id: uuid, complete:false}]

    })

      TodoNameRef.current.value = null
  }

  const handleClearTodo = () =>{
    const newTodo = todos.filter(todo => !todo.complete)
    setTodos(newTodo)
  }

  const bannerStyle = {
    width: '100%',
    backgroundColor:'#C7CACD',
    color:'#F9FBFE',
    padding:'2rem',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.6)',
    transition: '0.3s'
  }
  
  return (
      
    <Container >
      <div className="div-banner" style={bannerStyle}>Copyright (c) Fredrick Idemudia</div>
      <div className="div-container">
        <div className="header">Todo List - React JS</div>
        <TodoList todos = {todos} toggleTodo = {toggleTodo} />
        <div className="input-box-div">
          <input ref={TodoNameRef} type="text" className="input" placeholder="Type Your Task" />
        </div>
        <div className="div-buttons">
          <button type="button" className="btn btn-secondary btn-sm"  onClick={handleAddTodo}>Add Todo Task</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={handleClearTodo}>Clear Completed Task</button>
        </div>
        <button type="button" className="btn btn-secondary btn-sm">
          <span className="badge bg-danger">
          {todos.filter(todo => !todo.complete).length}
          </span> tasks(s) left to do
        </button>
      </div>
    </Container>
    
  )
}

export default App;
