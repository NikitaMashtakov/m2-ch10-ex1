const initialState = {
  isLoading: false,
  search: '',
  selectedSort: '_sort=id&_order=desc',
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SORT':
      return { ...state, selectedSort: payload };

    case 'SET_SEARCH':
      return { ...state, search: payload };

    case 'UPDATE_LOADING':
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};
