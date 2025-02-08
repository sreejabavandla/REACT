
import { useState } from "react";


function ToDo() {

  const [tasks, setTasks] = useState(["Sample task"])
  const [newTask, setNewTask] = useState("")

  const [completedTasks, setCompletedTasks] = useState([]);

  function handleClick(e) {

    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask])
    setNewTask("")

    
  }

  function handleChange(e) {
    setNewTask(e.target.value)
  }

  function handleCheck(index) {

      const taskToComplete = tasks[index]

      setCompletedTasks([...completedTasks, taskToComplete]);
      setTasks(tasks.filter((_, i) => i !== index ))
      

    

  }


  return(

    <div>
      <h1> To Do App </h1>

      <h2>
        List of Tasks
      </h2>

      <ul>
        {tasks.map((task, index) => <li key={index}>{task} <input type="checkbox" onChange={() => handleCheck(index)} />  </li>)}


      </ul>





      


      <label> New task <input type="string" value = {newTask} onChange={handleChange} id="taske" /> </label>

      <button onClick={handleClick} >Add</button>


      <h2>List of completed tasks</h2>

      <ul>{completedTasks.map((task, index) => <li key={index}> {task} </li>)}</ul>

      






    </div>

  );

}

export default ToDo