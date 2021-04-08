import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, selectTasks } from './tasksSlice';
import { addCompletedTask, removeCompletedTask, selectCompleted } from './completedTasksSlice';
import './Tasks.css';

export function Tasks() {
  const tasks = useSelector(selectTasks);
  const completedTasks = useSelector(selectCompleted);
  const dispatch = useDispatch();
  const [taskRemovedOnCompleted, setTaskRemovedOnCompleted] = useState(false);

  const incompleteTaskColor = { backgroundColor: 'white' };
  const completeTaskColor = { backgroundColor: '#9FFFAA' };

  const currentlyDisplayed = { display: 'initial' };
  const notDisplayed = { display: 'none' };

  const handleComplete = task => {
    if (taskRemovedOnCompleted) {
      dispatch(removeTask(task));
      dispatch(addCompletedTask(task));
    } else {
      if (!completedTasks.includes(task)) {
        dispatch(addCompletedTask(task));
      } else {
        dispatch(removeCompletedTask(task));
      }
    }
  };

  const removeOnCompletedCheckbox = () => {
    if (taskRemovedOnCompleted === false && completedTasks.length > 0) {
      for (const element of completedTasks) {
        dispatch(removeTask(element));
      }
    }
    setTaskRemovedOnCompleted(!taskRemovedOnCompleted);
  };

  return (
    <div className="task-section">
      {tasks.map((task) => (
        <div className="each-task" style={completedTasks.includes(task) ? completeTaskColor : incompleteTaskColor}>
          <button className="task-elements" onClick={() => {dispatch(removeTask(task))}}>x</button>
          <p className="task-elements">{task}</p>
          <input type="checkbox" className="task-elements completed-checkbox" onChange={() => {handleComplete(task)}} checked={completedTasks.includes(task) ? true : false} />
        </div>
      ))}
      <div className="checkbox-area" style={tasks.length > 0 ? currentlyDisplayed : notDisplayed}>
          <input type="checkbox" id="remove-when-complete" name="remove-when-complete" className="task-elements" onChange={() => removeOnCompletedCheckbox()} />
          <label for="remove-when-complete">Remove tasks when marked complete</label>
      </div>
      <p className="no-tasks-text" style={tasks.length > 0 ? notDisplayed : currentlyDisplayed}>Tasks will show up here!</p>
    </div>
  );
}
