import { editTodo } from 'utils/api';

export const editTodoAction = (id, text) => (dispatch, getState) => {
  const { todosState } = getState();
  editTodo(id, text)
    .then((updatedTodo) =>
      todosState.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
    )
    .then((result) => {
      dispatch({ type: 'EDIT_TODO', payload: { todos: result } });
    })
    .catch((error) => console.log(error));
};
