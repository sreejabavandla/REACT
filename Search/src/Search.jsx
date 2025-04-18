import { useState } from "react";

function Sort(){

  const[array, setArray] = useState([])
  const[input, setInput] = useState('')
  const[search, setSearch] = useState(0)
  const[indexx, setIndexx] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setArray([...array, Number(input)]);
    setInput('')

  }

  const handleSub = (e) => {
    e.preventDefault()
    const ind = array.findIndex(item => item === Number(search))
    setIndexx(Number(ind))
  }

  return (
    
    <>
    <h3>Enter elements: </h3>
    <form onSubmit={handleSubmit}>
    <input onChange={(e) => {setInput(e.target.value)}} type="number" placeholder="enter number to add"  />

    <button type="submit" >Add</button>
    </form>


    <ul style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none' }}>
      {array.map((val, index) => (

        <li style={{
          padding: '10px 15px',
          backgroundColor: indexx === index ? '#5CE65C' : 'white',
          borderRadius: '6px',
          fontWeight: 'bold',
        }} key={index}>{val}</li>

      )) }
    </ul>

    <form onSubmit={handleSub}>
      <input onChange={(e) => {setSearch(e.target.value)}} placeholder="enter element to search" />
      <button type="submit" >Submit</button>
    </form>
    
    </>


  );

}

export default Sort