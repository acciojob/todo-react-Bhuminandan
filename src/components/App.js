
import React, { useState } from "react";
import ToDo from "./ToDo";
import './../styles/App.css';

const App = () => {

  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);

  const handleInputVal = (e) => {
    console.log(inputVal);
    setInputVal(e.target.value);
  }

  const handleAddTodoBtn = () => {
    const newList = [...list, inputVal]; // Create a new array with the updated data
    setList(newList); // Update the state with the new array
    setInputVal(""); // Clear the input field
  }

  const handleDeleteTodo = (todoName) => {
    // Create a new array excluding the todo item to delete
    const updatedList = list.filter((item) => item !== todoName);
    setList(updatedList);
  }

  return (
    <div className="main-div">
        <h1 className="h1">To Do List</h1>
          <div className="input-box">
                <input
                className="input"
                type="text"
                onChange={handleInputVal}
                value={inputVal}
                />
                <button 
                className="btn"
                onClick={handleAddTodoBtn}>Add Todo</button>
          </div>
          <ul className="doto-container">
             {
              list.map((listItem) => {
                return <ToDo
                  key={listItem}
                  name={listItem}
                  onDelete={() => handleDeleteTodo(listItem)} // Pass the delete callback
                />
              })
            }

          </ul>
    </div>
  )
}

export default App
