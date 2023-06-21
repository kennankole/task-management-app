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
      <h1 className='home-title'>Welcome to task management app</h1>
      <div className='task-display'>
        <div className="form-section">
          <AddTasks />
        </div>
        <div className='ul-elements'>
          {tasks.length ? <TasksList tasks={tasks} /> : <p>{status}</p>}
        </div>
      </div>
    </main>
  )
}

export default App
