const baseUrl = 'http://localhost:3000/todos';

export const getTodos = (selectedSort) => {
  return fetch(`${baseUrl}?${selectedSort}`).then((response) => response.json());
};

export const completeTodo = (id, completed) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      completed: !completed,
    }),
  }).then((response) => response.json());
};

export const addTodo = (text) => {
  return fetch(`${baseUrl}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: text,
      completed: false,
    }),
  }).then((response) => response.json());
};

export const deleteTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};

export const editTodo = (id, text) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: text,
    }),
  }).then((response) => response.json());
};
