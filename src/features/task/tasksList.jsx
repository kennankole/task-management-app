import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./taskSlice";
import { postTasks } from "./taskSlice";
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

  const [data, setData] = useState('');

  const handleInput = (event) => {
    setData(event.target.value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert(data);
    const task = {
      id: 10,
      name: data,
      completed: false,
    }
    dispatch(postTasks(task));
    // content = updatedTasks.map((task) => (
    //   <TaskExcerpt key={task.id} task={task} />
    // ));

    setData('');
  }
  return (
    <div>
      <ul>
        {content}
      </ul>
      <div>
        <form onSubmit={handleSubmitForm}>
          <input placeholder='Enter task' value={data} onChange={handleInput} />
          <input type='submit' />
        </form>
      </div>
    </div>

  )
}

TaskExcerpt.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
export default TasksList;

