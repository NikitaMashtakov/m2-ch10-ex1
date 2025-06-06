import { TodoList } from 'components/TodoList/TodoList';
import { NewTodoInput } from 'components/NewTodoInput/NewTodoInput';
import { Toolbar } from 'components/Toolbar/Toolbar';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Selector } from 'components/Selector/Selector';
import { OPTIONS } from 'constants/sortingOptions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getTodosAction } from 'actions/getTodosAction';

class AllTodoPageContainer extends Component {
  // const dispatch = useDispatch();
  // const selectedSort = useSelector((state) => state.appState.selectedSort);
  constructor() {
    super();
    this.state = { selectedSort: OPTIONS[0] };
  }
  selectorHandler = (value) => {
    this.props.dispatch({ type: 'SET_SORT', payload: value });
  };

  render() {
    this.props.dispatch(getTodosAction(this.state.selectedSort));

    return (
      <>
        <Toolbar>
          <SearchBar />
          <Selector
            label={'Сортировка'}
            selectorId={'sortingSelector'}
            options={OPTIONS}
            onSetSelected={this.selectorHandler}
          />
        </Toolbar>

        <NewTodoInput placeholder="Новая задача..." buttonName="Добавить" />

        <TodoList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedSort: state.appState.selectedSort,
});

export const AllTodoPage = connect(mapStateToProps)(AllTodoPageContainer);

export default AllTodoPage;
