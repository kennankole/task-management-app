import PropTypes from 'prop-types';

const DeleteModal = ({ onCancel, onDelete }) => (
  <div className="modal-overlay">
    <div className="delete-modal">
      <h3>Confirm Delete</h3>
      <p>Are you sure you want to delete this task?</p>
      <div className="modal-buttons">
        <button type="button" onClick={onDelete} className="delete-btn">
          Delete
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  </div>
)
DeleteModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default DeleteModal;