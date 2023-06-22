import reducer, { tasksSlice } from './features/task/taskSlice';
import { addTasks } from './features/task/tasksActionsCreators';
import { mockNetworkResponse, getCreateTaskResponse } from './utils/tests.data';
import tasks from './store';

test('should return initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual(tasksSlice.getInitialState());
})

describe('Creat a new task', () => {
  beforeAll(() => {
    mockNetworkResponse();
  });

  it('Should be able to create a new user', async() => {
    const previousState = tasks.getState().task;

    const previousTasks = [...previousState.tasks];
    previousTasks.push(getCreateTaskResponse);

    const result = await tasks.dispatch(addTasks(getCreateTaskResponse));

    const task = result.payload;

    expect(result.type).toBe('tasks/postTasks/fulfilled');
    expect(task).toEqual(expect.objectContaining({
      completed: false,
      name: 'Task 1'
    }));

    // await task.waitFor(addTasks.fulfilled.type);
    
    const state = tasks.getState().task;

    expect(state.tasks).toEqual(expect.objectContaining({
      completed: false,
      name: 'Task 1'
    }));
  })
})