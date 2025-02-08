import { useState } from "react";

function ArrayofObjects() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");

  const [year, setYear] = useState("");

  function handleOnClick(e) {
    const obj = {name, year}
    setStudents([...students, obj])
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleYearChange(e) {
    setYear(e.target.value)
  }
 
  
  return(
    <div>
      <h2>List of Students</h2>

      <ul>
        {students.map((stud, index) => <li key={index}>{stud.name} {stud.year}</li>)}
      </ul>

      <label>
        Enter student name:
        <input type="string" onChange={handleNameChange} value={name} id="setname" />
      </label>
      <label>
        Enter student year:
        <input type="number" onChange={handleYearChange} value={year} id="setyear" />
      </label>

      <button onClick={handleOnClick} > Submit </button>
    </div>

  );


}

export default ArrayofObjects