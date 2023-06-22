import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { FaTrash, FaEdit } from 'react-icons/fa';

import { deleteTask, editTask } from "../features/task/tasksActionsCreators";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editStatus, setEditStatus] = useState(task.completed);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
    setShowDeleteModal(false);
  }

  const showDeleteConfirmation = () => {
    setShowDeleteModal(true);
  }

  const closeDeleteConfirmation = () => {
    setShowDeleteModal(false)
  }

  return (
    <li className="task-elements">
      {editMode ? (
        <div className="edit-container">
          <div className="edit-input-container">
            <input
              type="text"
              value={editedTaskName}
              onChange={handleTaskNameChange}
              className="edit-input"
            />
          </div>
          <div className="edit-task-btn">
            <button
              type="button"
              onClick={handleUpdateTask}
              className="edit-btn"
            >
              Save
            </button>
            <button
              type="button"
              onClick={exitEditMode}
              className="edit-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="taskButtons">
          <div className="task-title">
            <span>
              <input
                type='checkbox'
                onChange={handleStatusChange}
                checked={editStatus}
              />
            </span>
            {task.name} | {editStatus ? 'Done' : 'Not done'}
          </div>
          <span className="button-actions">
            <button
              type='button'
              onClick={showDeleteConfirmation}
            >
              <FaTrash className="fa-icons" />
            </button>
            <button
              type='button'
              onClick={enterEditMode}
            >
              <FaEdit className="fa-icons" />
            </button>
          </span>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this task?</p>
            <div className="modal-buttons">
              <button type="button" onClick={() => handleDelete(task.id)} className="confirm-delete">
                Delete
              </button>
              <button type="button" onClick={closeDeleteConfirmation} className="cancel-delete">
                Cancel
              </button>
            </div>
          </div>
        </div>
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

