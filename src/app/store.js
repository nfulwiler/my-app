import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/counter/tasksSlice';
import completedTasksReducer from '../features/counter/completedTasksSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    completedTasks: completedTasksReducer
  }
});
