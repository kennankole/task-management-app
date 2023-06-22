import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import AddTasks from "./AddTasks";
import { addTasks } from "../features/task/taskSlice";

const mockStore = configureStore([]);

describe('AddTasks', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn()
  });

  it('renders the AddTasks component', () => {
    render(
      <Provider store={store}>
        <AddTasks />
      </Provider>
    );
  });

  it('dispatches addTasks action on form submission', () => {
    render(
      <Provider store={store}>
        <AddTasks />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Add Task');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(addTasks({ name: 'New Task', completed: false }));
    expect(input.value).toBe('');
  });
});