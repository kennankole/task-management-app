import TasksList from './features/task/tasksList'
const App = () => {
  return (
    <main>
      <h1>Welcome to task management</h1>
      <div className='task-elements'>
        <TasksList />
      </div> 
      <div>
        <input placeholder='Enter task' ></input>
        <input type='submit'></input>
      </div>
    </main>
  )
}

export default App
