import { TodoList } from 'components/TodoList/TodoList';
import { NewTodoInput } from 'components/NewTodoInput/NewTodoInput';
import { Toolbar } from 'components/Toolbar/Toolbar';
import { useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Selector } from 'components/Selector/Selector';
import { OPTIONS } from 'constants/sortingOptions';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAction } from 'actions/getTodosAction';

const AllTodoPage = () => {
  const dispatch = useDispatch();
  const selectedSort = useSelector((state) => state.appState.selectedSort);

  const selectorHandler = (value) => {
    dispatch({ type: 'SET_SORT', payload: value });
  };

  useEffect(() => {
    dispatch(getTodosAction(selectedSort));
  }, [dispatch, selectedSort]);

  return (
    <>
      <Toolbar>
        <SearchBar />
        <Selector
          label={'Сортировка'}
          selectorId={'sortingSelector'}
          options={OPTIONS}
          onSetSelected={selectorHandler}
        />
      </Toolbar>

      <NewTodoInput placeholder="Новая задача..." buttonName="Добавить" />

      <TodoList />
    </>
  );
};

export default AllTodoPage;
