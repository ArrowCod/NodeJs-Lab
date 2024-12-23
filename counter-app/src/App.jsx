import { Button } from 'bootstrap';
import { useState } from 'react'


// ToDo Application
function App() {

  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym form 7-9",
    completed: false
  },{
    title: "Study DSA",
    description: "Study Dsa from 9-10",
    completed: true
  }]);
  function addTodo(){
    setTodos([...todos, {
      title: "New Todo",
      description: "We ar doing.... "
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Random todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/> 
      })}

    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
