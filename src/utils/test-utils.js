import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import setUpStore from "../store";

export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = setUpStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions })}
}