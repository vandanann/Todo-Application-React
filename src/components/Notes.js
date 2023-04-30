import React from "react";
import './notes.css';
import { useState, useEffect } from "react";
const Notes= ()=>{
 const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {

      return JSON.parse(savedTodos);

    } else {

      return [];
    }
  });
 const [todo, setTodo] = useState("");
 useEffect(() => {
           localStorage.setItem("todos", JSON.stringify(todos));
                 }, [todos]);

 function handleInputChange(e) {
      setTodo(e.target.value);
    }
  
 function handleFormSubmit(e) {
      e.preventDefault();    
      if (todo !== "") {
            setTodos([...todos,
          {  
            id: todos.length + 1,
             text: todo.trim()
          }
        ]);
      }
    setTodo("");

 }
 function handleDeleteClick(id) {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = todos.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== id;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setTodos(removeItem);
  }

    return(
      <div class="w3-margin ">

      <h2>Create Notes</h2>
  
  
      <div class="w3-bar" style={{letterSpacing: "4px;"}}>
          <input class="w3-bar w3-white w3-hover-black w3-left w3-button w3-xlarge" name="todo" type="text" placeholder="Write Notes" value={todo} onChange={handleInputChange} autoComplete="off" style={{width: "85%", cursor: "auto"}} />
  
          <a onClick={handleFormSubmit} style={{width: "15%"}} class="w3-border w3-button w3-bar w3-right 3-round-large w3-medium w3-hover-white "><img src="https://img.icons8.com/external-others-inmotus-design/36/null/external-Plus-virtual-keyboard-others-inmotus-design-2.png" /> <b>Create</b></a>
      </div>
  
  
  
  
  
      {todos.map((todo) => (
      <div class="tabcon w3-quarter w3-margin w3-padding w3-round-large " style={{ backgroundColor: "#22313f"}} key={todo.id}>
          <p>
              {todo.text}
              <ul class="sci w3-right">
                  <li>
                      <a>Edit</a>
                  </li>
                  <li>
                      <a onClick={()=> handleDeleteClick(todo.id)}>Delete</a>
                  </li>
  
  
              </ul>
          </p>
  
      </div>
      ) )}
  
  
  </div>

              
        
          
    )
}
export default Notes;