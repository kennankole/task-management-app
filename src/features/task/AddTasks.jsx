import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "./taskSlice";

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
    <form onSubmit={handleSubmitForm}>
      <input placeholder='Enter task' value={data} onChange={handleInput} />
      <input type='submit' />
    </form>
  )
}
export default AddTasks;