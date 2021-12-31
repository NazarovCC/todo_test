import { TODOS } from '../../data';
import {
  LOAD_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SELECTED_VALUE,
} from '../types';

export const loadTodo = () => {
  return {
    type: LOAD_TODOS,
    payload: TODOS,
  };
};
export const addTodo = (todo) => {
  const payload = { ...todo };
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
export const updateTodo = (id) => {
  return {
    type: UPDATE_TODO,
    payload: id,
  };
};
export const selected = (value) => {
  return {
    type: SELECTED_VALUE,
    payload: value,
  };
};
