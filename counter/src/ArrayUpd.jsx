
import React, { useState } from "react";


function ArrayUpd() {

  // update array in state

  const [food, setFood] = useState(["Sub", "Sandwich", "Ricebowl"]);


  function handleAddFood(e) {

    const item = document.getElementById("foodinput").value;

    setFood([...food, item]);

  }

  function handleRemoveFood(index) {

    setFood(food.filter((element, i) => i !== index))

  }



  return(
    <div>

      <h2>List of Food</h2>

      <ol>
        {food.map((item, index) => <li key={index} onClick={() => handleRemoveFood(index)} >{item}</li> ) }
      </ol>

      <label>
        Enter the food name which you want to add:
        <input type="string" id="foodinput" placeholder="enter the food" />
        <button onClick={handleAddFood}>Add Food</button>

      </label>


    </div>
  )

  

}

export default ArrayUpd