import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from './features/task/taskSlice';

const rootReducer = combineReducers({
  task: taskReducer
})

const setUpStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export default setUpStore;
