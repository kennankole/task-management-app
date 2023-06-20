import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./taskSlice";
import PropTypes from 'prop-types';

const TaskExcerpt = ({ task }) => {
  return (
    <li>
      <span>
        <input type='checkbox'></input>
      </span>
       {task.name}
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

TaskExcerpt.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
export default TasksList;

