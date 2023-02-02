import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: Math.random(), text: "learn redux", isComplit: false },
    { id: Math.random(), text: "learn react", isComplit: false },
    { id: Math.random(), text: "learn ", isComplit: true },
  ],
};

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    Addtodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        text: action.payload,
        isComplit: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    },
    editTodo: (state, action) => {
      console.log(action);
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id == action.payload.id
            ? { ...el, text: action.payload.newtodo }
            : el
        ),
      };
    },
  },
});

export const { Addtodo, deleteTodo, editTodo } = TodosSlice.actions;

export default TodosSlice.reducer;
