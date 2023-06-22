import reducer, { tasksSlice } from './features/task/taskSlice';

test('should return initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual(tasksSlice.getInitialState());
})