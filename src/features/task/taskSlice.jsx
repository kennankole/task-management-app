import { createSlice } from '@reduxjs/toolkit';
import { 
  addTasks, editTask, deleteTask,
  fetchTasks, 
 } from './tasksActionsCreators';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null
  },
  reducers: {},

  extraReducers(builder) {
    builder

      // Fetch tasks
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => ({
        ...state,
        tasks: action.payload
      }))
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

      // Add tasks
      .addCase(addTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTasks.fulfilled, (state, action) => ({
        ...state,
        tasks: action.payload
      }))

      .addCase(addTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete tasks
      .addCase(deleteTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Edit tasks 
      .addCase(editTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const taskIndex = state.tasks.findIndex((task) => task.id === updatedTask.id);
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
        }
      })
      .addCase(editTask.pending, (state) => {
        state.status = 'loading';
      })
  }
})

export default tasksSlice.reducer
