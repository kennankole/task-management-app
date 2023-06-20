import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './features/task/taskSlice';

const tasks = configureStore({
  reducer: {
    task: TaskReducer,
  },
});
export default tasks;