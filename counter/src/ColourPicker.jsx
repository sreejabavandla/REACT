import { useState } from "react";

function ColourPicker() {

  const [color, setColor] = useState();

  var act;

  function handleColor(e) {
    setColor(e.target.value);
  }

  return(
    <div>
      <h3>Colour Picker</h3>
      <div style={{backgroundColor: color}}>
        <h2>fgffgf {color}</h2>
        
      </div>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );

}

export default ColourPicker;