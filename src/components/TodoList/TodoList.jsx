import { Todo } from 'components/Todo/Todo';
import styles from './TodoList.module.css';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const TodoList = () => {
  const search = useSelector((state) => state.appState.search);
  const todos = useSelector((state) => state.todosState.todos);
  const isLoading = useSelector((state) => state.appState.isLoading);

  const todosToShow = todos.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className={styles.container}>
      {isLoading ? (
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
};
