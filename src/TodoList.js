import React, { useState } from 'react'

function TodoList() {
  const [todos,setTodos]=useState([]);
  const  [inputValue,setInputValue]=useState("");

 const addTodos =() =>{
    if(inputValue !== " "){
      setTodos([...todos,inputValue]);
      setInputValue('');
    }
  }

  const  removeTodos = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos)
    }
  
  return (
    <div>
      <h1>TodoList</h1>
      <input
      type='text'
      value={inputValue}
      onChange={(e) =>setInputValue(e.target.value)}
      placeholder='Write something'
      />
      
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((todo,index) =>(

          <li key={index}>
            {todo}

            <button onClick={() =>removeTodos(index)}>Remove</button>

          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList