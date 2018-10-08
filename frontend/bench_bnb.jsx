import Root from "./components/root";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import React from "react";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
