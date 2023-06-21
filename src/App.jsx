import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from './features/task/taskSlice';
import TasksList from './features/task/tasksList'
import AddTasks from './features/task/AddTasks'

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const status = useSelector((state) => state.task.status);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch, tasks.length]);

  return (
    <main>
      <h1>Welcome to task management</h1>
      {tasks.length ? <TasksList tasks={tasks} /> : <p>{status}</p> }
      <AddTasks />
    </main>
  )
}

export default App
