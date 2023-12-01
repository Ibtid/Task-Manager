import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { ITask, ITasksState } from "./interfaces/task";

const initialState: ITasksState = {
  todos: [
    {
      id: 1,
      title: "Play Games",
      description: "I need to join my friends for a match",
      status: "todo",
      due: "29 Mar, 2023",
    },
    {
      id: 2,
      title: "Water Plants",
      description: "I need to water my plants at evening",
      status: "completed",
      due: "29 Aug, 2023",
    },
    {
        id: 4,
        title: "Play Games",
        description: "I need to join my friends for a match",
        status: "in progress",
        due: "29 Mar, 2023",
      },
    {
      id: 3,
      title: "Do Homework",
      description: "I need to complete by Homework by saturday",
      status: "completed",
      due: "29 Mar, 2023",
    },
    {
      id: 5,
      title: "Play Games",
      description: "I need to join my friends for a match",
      status: "todo",
      due: "29 Mar, 2023",
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITask>) => {
      const newTodo: ITask = {
        id: action.payload.id,
        title: action.payload.title,
        status: action.payload.status,
        description: action.payload.description,
        due: action.payload.due,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action: PayloadAction<ITask>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.status = action.payload.status;
        todo.due = action.payload.due;
        todo.description = action.payload.description;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = (state: { todos: ITasksState }) => state.todos.todos;

export default todosSlice.reducer;
