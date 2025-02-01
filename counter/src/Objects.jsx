import { useState } from "react"

function Objects(){

  // update Objects in state
  const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang", name:"Sonet" })

  function handleYear(event) {

    setCar({...car, year: event.target.value})
    
  }

  function handleMake(event) {
    setCar({...car, make: event.target.value})
  }

  function handleModel(e) {
    setCar({...car, model: e.target.value})
  }

  return (
    <div>
      <p>Your fav car is {car.name} {car.make} {car.year} , {car.model}</p>

      <label>Enter the year of your fav car
        <input value={car.year} onChange={handleYear} type="number" />
      </label>
<br></br>
      <label>Enter the make of your fav car
        <input value={car.make} onChange={handleMake} type="string" />
      </label>
<br></br>
      <label>Enter the model of your fav car
        <input value={car.model} onChange={handleModel} type="string" />
      </label>
    </div>
  )

}

export default Objects