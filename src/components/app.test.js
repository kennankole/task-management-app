import React from "react";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { renderWithProviders } from "../utils/test-utils";
import App from "./App";
export const handlers = [
  rest.get('/api/v1/tasks', (req, res, ctx) => {
    const tasks = [
      { id: 1, name: 'Task 1', completed: false }, 
      { id: 2, name: 'Task 2', completed: false }
    ];
    return res(ctx.json(tasks), ctx.delay(150));
  })
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

test('fetches all the tasks', async () => {
  renderWithProviders(
    <App />
  )

  expect(screen.getByText(/loading/i)).toBeInTheDocument()

  expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument()
})