import React, { useState } from "react";
import "./todolist.css"; // Import the CSS file for styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const markTaskCompleted = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>Tasks:</h2>
      <div className="ankit">
        {tasks.length > 0 ? (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <div className="button-group">
                  <button onClick={() => markTaskCompleted(task)}>
                    Mark Completed
                  </button>
                  <button onClick={() => removeTask(task)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks to display.</p>
        )}
      </div>

      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {tasks.length - tasks.length}</p>
    </div>
  );
}

export default App;
