import { Todo } from 'components/Todo/Todo';
import styles from './TodoList.module.css';
import { connect } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoListContainer extends PureComponent {
  constructor(search, todos, isLoading) {
    super(search, todos, isLoading);
  }

  render() {
    const todosToShow = this.props.todos.filter(({ title }) =>
      title.toLowerCase().includes(this.props.search.toLowerCase()),
    );
    return (
      <div className={styles.container}>
        {this.props.isLoading ? (
          <Loader />
        ) : todosToShow.length !== 0 ? (
          todosToShow.map(({ id, title, completed }) => (
            <Todo key={id} id={id} title={title} completed={completed} />
          ))
        ) : (
          <h2 className={styles.noTodos}>Задач нет</h2>
        )}
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  search: PropTypes.string,
  todos: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  search: state.appState.search,
  todos: state.todosState.todos,
  isLoading: state.appState.isLoading,
});

export const TodoList = connect(mapStateToProps)(TodoListContainer);
