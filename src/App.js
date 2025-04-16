import React from "react";
import Todo from "./Todo";
import './App.css';
import { useState, useEffect } from "react";
const App= ()=>{
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
  
      return JSON.parse(savedTodos);
  
    } else {
  
      return [];
    }
    });
  
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
      <div class="container">
    
  <Todo handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} todo={todo}/>
  {todos.map((todo) => ( <div class="container">
   
        
                
                  <div class="w3-leftbar w3-text-white w3-padding w3-border ">
                    
                      <p> {todo.text}   <a className="w3-button w3-small w3-pale-green w3-border "style={{marginLeft:"200px"}} onClick={()=> handleDeleteClick(todo.id)}>Delete</a></p>
                      
                    
                   
                  </div>
              
           
              

         
     </div> ) )}

             
</div>

        
          
    )
}
export default App;