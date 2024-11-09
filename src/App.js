import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1>My Personal To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="task-container">
          {taskList.length > 0 ? (
            <ul>
              {taskList.map((task, index) => (
                <li key={index}>
                  <span>{task}</span> {/* Use a span to control text wrapping */}
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks available</p>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

