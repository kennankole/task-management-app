import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig";

const initialState = {
  tasks: [],
  status: 'idle',
  error: null
}

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await axiosInstance.get('http://127.0.0.1:3000/api/v1/tasks/');
    return response.data;
  }
)

export const addTasks = createAsyncThunk(
  'tasks/postTasks',
  async (taskData) => {
    const response = await axiosInstance.post('http://127.0.0.1:3000/api/v1/tasks/', taskData);
    return response.data;
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks.push(action.payload);
      })
      .addCase(addTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default tasksSlice.reducer
