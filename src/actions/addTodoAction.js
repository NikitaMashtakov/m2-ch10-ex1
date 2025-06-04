import { addTodo } from 'utils/api';

export const addTodoAction = (text) => (dispatch) => {
  addTodo(text)
    .then((newTodo) => {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
    })
    .catch((error) => console.log(error));
};
