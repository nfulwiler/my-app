import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './features/counter/tasksSlice';
import { Tasks } from './features/counter/Tasks';
import { TaskCompletedResponse } from './features/counter/completedTasks';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const inputElement = useRef(null);

  const handleClick = () => {
    if (inputElement.current.value !== '') {
      dispatch(addTask(inputElement.current.value));
    }
  };

  return (
      <div className="outer-container">
        <div className="input-button-section">
          <h1>It's a great day to get some stuff done!</h1>
          <input ref={inputElement} type="text" placeholder="Add a task" className="text-input" />
          <button className="add-button" onClick={handleClick}>Add</button>
          <TaskCompletedResponse />
        </div>
        <Tasks />
      </div>
  );
}

export default App;
