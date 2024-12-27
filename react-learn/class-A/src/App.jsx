import React from "react";
import { useState } from "react";

let counter = 4; 
function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "college",
    description: "go to college today"
  },{
    id: 3,
    title: "Reading",
    description: "complete the book today!"
  }])

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
 
  return (
    <div>
      <button onClick={addTodo} >Add Todo</button>
     {todos.map(todos => <Todo key={todos.id} title={todos.title} description={todos.description} />)}
    </div>
  )
}
function Todo({title, description}){

  return(
    <div>
      <h1>
        {title}
      </h1>
      <h3>
        {description}
      </h3>
    </div>
  )
}


export default App
