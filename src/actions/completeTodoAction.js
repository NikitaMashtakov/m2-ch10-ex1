import { completeTodo } from 'utils/api';

export const completeTodoAction = (id, completed) => (dispatch, getState) => {
  const { todosState } = getState();
  completeTodo(id, completed)
    .then((updatedTodo) =>
      todosState.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
    )
    .then((result) => {
      dispatch({ type: 'COMPLETE_TODO', payload: { todos: result } });
    })
    .catch((error) => console.log(error));
};
