import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./taskSlice";

const TaskExcerpt = ({ task }) => {
  return (
    <li>
      <span>
        <input type='checkbox'></input>
      </span>
      <h4>{task.name}</h4>
      <span>
        <button type='submit'>Delete</button>
        <button type='submit'>Edit</button>
      </span>
    </li>
  )
}

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  console.log(tasks);
  console.log(tasks.status)

  useEffect(() => {
    if (tasks.status === 'idle') {
      dispatch(fetchTasks())
    }
  }, [tasks.status, dispatch])

  let content = '';
  if (tasks.status === 'loading') {
    content = 'Loading...';
  } else if (tasks.status === 'succeeded') {
    content = tasks.tasks.map((task) => (
      <TaskExcerpt key={task.id} task={task} />
    ))
  } else if (tasks.status === 'failed') {
    content = <div>{tasks.error}</div>
  }
  return (
    <ul>
      {content}
    </ul>
  )
}
export default TasksList;

