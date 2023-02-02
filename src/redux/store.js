import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./Todos";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
});
