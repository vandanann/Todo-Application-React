
import React from "react";
const Todo =({handleFormSubmit, handleInputChange, todo})=>{
    return(
        <div >
         <h1 className="w3-text-white">My Todo List</h1>
        
          <input class="w3-input w3-bar" type="text" name="Name" value={todo} onChange={handleInputChange} autoComplete='false' style={{ textDecoration:"none"}} placeholder="add a note" />
        
        <a  onClick={handleFormSubmit} type="submit"  class="w3-button w3-pale-green w3-border w3-hover-text-orange">ADD</a>
    </div>
       
    )
}

export default Todo;



