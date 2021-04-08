import { createSlice } from '@reduxjs/toolkit';

export const completedTasksSlice = createSlice({
    name: 'completedTasks',
    initialState: { tasks: [], uniqueCompleted: 0 },
    reducers: {
        addCompletedTask: (state, action) => {
            return {tasks: [...state.tasks, action.payload], uniqueCompleted: state.uniqueCompleted + 1};
        },
        removeCompletedTask: (state, action) => {
            return {...state, tasks: state.tasks.filter(task => task !== action.payload)};
        }
    }
});

export const { addCompletedTask, removeCompletedTask } = completedTasksSlice.actions;

export const selectCompleted = state => state.completedTasks.tasks;
export const selectUniqueCompleted = state => state.completedTasks.uniqueCompleted;

export default completedTasksSlice.reducer;