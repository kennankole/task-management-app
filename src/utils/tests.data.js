import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const getCreateTaskResponse = {
  tasks: [
    {id : 1, name: 'Task 1', completed: false}
  ]
}

export const getTaskListResponse = {
  tasks: 
  [
    { id: 1, name: 'Task 1', completed: false},
    { id: 2, name: 'Task 2', completed: true},
    { id: 3, name: 'Task 3', completed: false}
  ]
};

export const mockNetworkResponse = () => {
  const mock = new MockAdapter(axios);

  mock.onGet(`/tasks/`).reply(200, getTaskListResponse);
  mock.onPost(`/tasks/`).reply(200, getCreateTaskResponse);

}