import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/axiosConfig";

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

export const deleteTask = createAsyncThunk(
  'tasks/deleteTasks',
  async (taskID) => {
    await axiosInstance.delete(`http://127.0.0.1:3000/api/v1/tasks/${taskID}`);
    return taskID;
  }
)

export const editTask = createAsyncThunk(
  'tasks/editTasks',
  async (updatedTask) => {
    const response = await axiosInstance.put(`http://127.0.0.1:3000/api/v1/tasks/${updatedTask.id}`, updatedTask);
    return response.data;

  }
)