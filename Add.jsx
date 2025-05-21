import React, {useState} from 'react';

function Add() {
  const[Todos, setTodos]=useState([]);       
  const[newtask, setNewtask]=useState('');  
 


  const addtask= () =>{
  if(newtask.trim() !==""){
    setTodos([...Todos, {text: newtask, completed: false}]);         
    setNewtask('');                              
  }
} 

  const deletetask= (index)=>{
    const updatedtodo = [...Todos];
    updatedtodo.splice(index, 1);
    setTodos(updatedtodo);

  }

  const toggletask=(index)=>{
    const updatedtodo=[...Todos];
    updatedtodo[index].completed= !updatedtodo[index].completed;
    setTodos(updatedtodo);

  }

  
  return (
    <div className="list-container">
      <h1>Add your Task</h1>
      <h2>Make it happen</h2>

      <div className="input-row">
        <input
          type="text" placeholder="enter your task" value={newtask}
          onChange={(e) => setNewtask(e.target.value)}
        />
        <button onClick={addtask}>📌</button>
      </div>

      <ul className="todo-list">
        {Todos.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <label className="task-label">
              <input type="checkbox" checked={task.completed} onChange={() => toggletask(index)} />
              <span className="task-text">{task.text}</span>
            </label>
            <button className="delete-btn" onClick={() => deletetask(index)}>Kill🧹</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Add;
