import React from "react";
import { useState } from "react";

function App() {
 

  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Arrow 2"></Header>
    </div>
  )
}
function HeaderWithButton(){
  const [title, setTitle] = useState("my name is Arrow");

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the Title</button>
    <Header title={title}></Header>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
