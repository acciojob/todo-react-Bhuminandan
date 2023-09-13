import React from 'react'
import '../styles/Todo.css'
const ToDo = ({name, onDelete}) => {
    const handleDelete = () => {
        onDelete(); // Call the onDelete callback
    };
  return (
    <div className='todolist-container'>
        <p>{name}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ToDo