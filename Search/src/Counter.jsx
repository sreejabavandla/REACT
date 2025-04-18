
import { useState } from "react";

function Counter() {

  const[count, setCount] = useState(0)

  function cnt() {
    setCount(c => c+1)
  }




  return (

    <div>
      <h2>Counter: {count}</h2>
      <button onClick={cnt}> Increment Count </button>
    </div>

  );

}

export default Counter