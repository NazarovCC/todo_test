import {
  LOAD_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SELECTED_VALUE,
} from '../types';

const initialState = {
  todos: [],
  value: null,
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    case SELECTED_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
