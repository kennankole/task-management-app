// import { useState } from 'react'
import ShowTasks from './features/DisplayTasks'
// import './App.css'

const App = () => {
  return (
    <main>
      <h1>Welcome to task management</h1>
      <div>
        <ShowTasks />
      </div>
      <div>
        <input placeholder='Enter task' ></input>
        <input type='submit'></input>
      </div>
    </main>
  )
}

export default App
