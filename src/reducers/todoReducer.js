const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TODOS':
      return { ...state, todos: payload.todos };

    case 'ADD_TODO':
      return { ...state, todos: [payload, ...state.todos] };

    case 'COMPLETE_TODO':
      return { ...state, todos: [...payload.todos] };

    case 'EDIT_TODO':
      return { ...state, todos: [...payload.todos] };

    case 'DELETE_TODO':
      return { ...state, todos: [...payload.todos] };

    default:
      return state;
  }
};
