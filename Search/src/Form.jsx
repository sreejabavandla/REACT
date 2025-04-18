import { useState } from "react";

function Form () {

  const[name, setName] = useState("")



  return(
    <>
    <form>
      <input onChange={(e) => {setName(e.target.value)}} type="text" name="name" placeholder="name" />
      <h3>Hi {name}</h3>
      <input type="email" name="email" placeholder="email"/>
    </form>
    </>
  );

}

export default Form