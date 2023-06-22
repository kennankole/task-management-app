import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../features/task/taskSlice";

const AddTasks = () => {
  const dispatch = useDispatch()

  const [data, setData] = useState('')
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = {
      name: data,
      completed: false,
    }
    dispatch(addTasks(formData))
    setData('')
  }

  const handleInput = (event) => {
    setData(event.target.value);
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder='Add Task'
          value={data} onChange={handleInput}
          className="task-input"
        />
        <input type='submit' className="task-submit" />
      </form>
    </div>
  )
}
export default AddTasks;
