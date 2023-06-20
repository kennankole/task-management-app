import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
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
    console.log('Helo', response.data);
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
        state.tasks = state.tasks.concat(action.payload)
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default tasksSlice.reducer
