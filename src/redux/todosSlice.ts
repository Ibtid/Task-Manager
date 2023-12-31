import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITasksState } from "../interfaces/task";

const initialState: ITasksState = {
  selectedTask: null,
  todos: [
    {
      id: 1,
      title: "Play Games1",
      description: "I need to join my friends for a match",
      status: "todo",
      due: "2023-02-02",
    },
    {
      id: 2,
      title: "Water Plants2",
      description: "I need to water my plants at evening",
      status: "completed",
      due: "2023-02-02",
    },
    {
      id: 3,
      title: "Play Games3",
      description: "I need to join my friends for a match",
      status: "in progress",
      due: "2023-02-02",
    },
    {
      id: 4,
      title: "Do Homework4",
      description: "I need to complete my Homework.",
      status: "completed",
      due: "2023-02-02",
    },
    {
      id: 5,
      title: "Play Games5",
      description: "I need to join my friends for a match",
      status: "todo",
      due: "2023-02-02",
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    selectTask: (state, action: PayloadAction<ITask>) => {
      const taskToBeEdited: ITask = {
        id: action.payload.id,
        title: action.payload.title,
        status: action.payload.status,
        description: action.payload.description,
        due: action.payload.due,
      };
      state.selectedTask = taskToBeEdited;
    },
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
      const deletedTodoId = action.payload;

      // Use filter to create a new array without the deleted todo
      state.todos = state.todos.filter((todo) => todo.id !== deletedTodoId);
      
    },
  },
});

export const { addTodo, editTodo, deleteTodo, selectTask } = todosSlice.actions;
export const selectTodos = (state: { todos: ITasksState }) => state.todos.todos;
export const selectedTask = (state: { todos: ITasksState }) =>
  state.todos.selectedTask;

export default todosSlice.reducer;
