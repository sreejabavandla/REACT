
import React, { useState } from "react";
import { use } from "react";


function MyComponent() {

  const [count, setCount] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const [name, setName] = useState();

  const incrementCount = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);

  }

  const toggle = () => {
    setIsEmployed(!isEmployed)
  }

  function handleOnChange(e) {
    setName(e.target.value);
  }



  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}> Increment Count </button>

      <h2>Is employed?: {isEmployed ? "Yes" : "No"} </h2>

      <button onClick={toggle} > Toggle Employ Status </button>

      <br></br>

      <input value={name} onChange={handleOnChange} />

      

      <h3>Hi {name}</h3>

    </div>
  )



}

export default MyComponent