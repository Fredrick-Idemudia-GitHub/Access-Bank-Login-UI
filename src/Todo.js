import React from 'react'
import './App.css'


export default function Todo({todo, toggleTodo}) {
  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <li className='list-items'>
      <div className='check-box-div'>
        <input type='checkbox' checked={todo.complete} onChange={handleTodoClick} />
        <span  className='name-display-span'>
        {todo.name}
        </span>
      </div>
    </li>
  )
}
