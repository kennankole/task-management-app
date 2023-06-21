import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { deleteTask, editTask } from "./taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editStatus, setEditStatus] = useState(task.completed);

  useEffect(() => {
    setEditStatus(task.completed)
  }, [task.completed])

  const enterEditMode = () => {
    setEditMode(true);
  };

  const exitEditMode = () => {
    setEditMode(false);
    setEditedTaskName(task.name);
    console.log(task.name)
    console.log(task.id)
  };

  const handleTaskNameChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  const handleStatusChange = (event) => {
    const newStatus = event.target.checked;
    console.log(task);
    setEditStatus(newStatus)

    const updatedData = {
      ...task,
      completed: newStatus
    };
    dispatch(editTask(updatedData))
  }

  const handleUpdateTask = () => {
    const updatedData = {
      ...task,
      name: editedTaskName,
    }
    dispatch(editTask(updatedData))
    exitEditMode();
  }

  const handleDelete = (taskID) => {
    dispatch(deleteTask(taskID))
  }

  return (
    <li>
      <span>
        <input 
          type='checkbox' 
          onChange={handleStatusChange}
          checked={editStatus}
        />
      </span>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedTaskName}
            onChange={handleTaskNameChange}
          />
          <button
            type="button"
            onClick={handleUpdateTask}
          >
            Save
          </button>
          <button
            type="button"
            onClick={exitEditMode}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          {task.name} | {editStatus ? 'Done' : 'Not done'}
          <span>
            <button type='button' onClick={() => handleDelete(task.id)}>Delete</button>
            <button type='button' onClick={enterEditMode}>Edit</button>
          </span>
        </>
      )}
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
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
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

