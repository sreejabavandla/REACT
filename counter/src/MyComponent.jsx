
import React, {useState} from "react";
import { use } from "react";


function MyComponent(){

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count+1);
  }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}> Increment Count </button>
    </div>
  )
  


}

export default MyComponent