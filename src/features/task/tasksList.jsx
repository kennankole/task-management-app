import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { deleteTask } from "./taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = (taskID) => {
    dispatch(deleteTask(taskID))
  }
  return (
    <li>
      <span>
        <input type='checkbox'></input>
      </span>
      {task.name}
      <span>
        <button type='button' onClick={() => handleDelete(task.id)}>Delete</button>
        <button type='submit'>Edit</button>
      </span>
    </li>
  )
}

const TasksList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </ul>
)

Task.propTypes = {
  task: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};
export default TasksList;

