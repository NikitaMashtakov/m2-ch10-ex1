import { Todo } from 'components/Todo/Todo';
import { connect } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoListContainer extends PureComponent {
  constructor(search, todos, isLoading) {
    super(search, todos, isLoading);
  }

  render() {
    return (
      <div className="flex flex-col">
        {this.props.isLoading ? (
          <Loader />
        ) : this.props.todosToShow.length !== 0 ? (
          this.props.todosToShow.map(({ id, title, completed }) => (
            <Todo key={id} id={id} title={title} completed={completed} />
          ))
        ) : (
          <h2 className="m-auto mt-[10px]">Задач нет</h2>
        )}
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  search: PropTypes.string,
  todosToShow: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const todosToShow = state.todosState.todos.filter(({ title }) =>
    title.toLowerCase().includes(state.appState.search.toLowerCase()),
  );
  return {
    search: state.appState.search,
    todosToShow,
    isLoading: state.appState.isLoading,
  };
};

export const TodoList = connect(mapStateToProps)(TodoListContainer);
