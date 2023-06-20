const ShowTasks = () => {
  const data = [
    {
      id: 1,
      task: 'Drawing',
    },
    {
      id: 2,
      task: 'Swimming',
    },
    {
      id: 3,
      task: 'Shopping',
    },
    {
      id: 4,
      task: 'Travelling',
    },
    {
      id: 5,
      task: 'Reading',
    },

  ]
  return  (
    < div >
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <span>
            <input type='checkbox'></input>
          </span>
          {item.task}
          <span>
            <button type='submit'>Delete</button>
            <button type='submit'>Edit</button>
          </span>
        </li>
      ))}
    </ul>
  </div >
  )
};
export default ShowTasks;
