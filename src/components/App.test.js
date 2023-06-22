// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import thunk from 'redux-thunk';
// import { fetchTasks } from '../features/task/tasksActionsCreators';
// import tasks from '../store';

// describe('fetching tasks', () => {
//   const mock = new MockAdapter(axios);

//   afterEach(() => {
//     mock.reset();
//   });

//   it('Should fetch tasks successfully', async () => {
    
//     mock.onGet('http://127.0.0.1:3000/api/v1/tasks/').reply(200, responseData);
//     await tasks.dispatch(fetchTasks());

//     const state = tasks.getState();
//     expect(state.task.tasks).toEqual(responseData.tasks);
//   })
// })