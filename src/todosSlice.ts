import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

interface Todo {
  id: number;
  title: string;
  description:string;
  status: string;
  due:String;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    {id:1,title:'Play Games',description:'I need to join my friends for a match',status:'ongoing',due:'29 Mar, 2023'},
    {id:2,title:'Play Games',description:'I need to join my friends for a match',status:'ongoing',due:'29 Mar, 2023'},
    {id:3,title:'Play Games',description:'I need to join my friends for a match',status:'ongoing',due:'29 Mar, 2023'},
    {id:4,title:'Play Games',description:'I need to join my friends for a match',status:'ongoing',due:'29 Mar, 2023'},
    {id:5,title:'Play Games',description:'I need to join my friends for a match',status:'ongoing',due:'29 Mar, 2023'},

  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo: Todo = {
        id: action.payload.id,
        title: action.payload.title,
        status:action.payload.status,
        description:action.payload.description,
        due:action.payload.due
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.status=action.payload.status;
        todo.due=action.payload.due;
        todo.description = action.payload.description
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = (state: { todos: TodosState }) => state.todos.todos;

export default todosSlice.reducer;