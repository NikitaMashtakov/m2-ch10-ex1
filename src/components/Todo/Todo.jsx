import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { useEffect, useState, useRef, Component } from 'react';
import { MdOutlineEdit, MdOutlineDelete, MdDone, MdClose } from 'react-icons/md';
import styles from './Todo.module.css';
import { connect, useDispatch } from 'react-redux';
import { completeTodoAction } from 'actions/completeTodoAction';
import { deleteTodoAction } from 'actions/deleteTodoAction';
import { editTodoAction } from 'actions/editTodoAction';

export class TodoContainer extends Component {
  // = ({ id, title, completed }) =>
  // const [isEditing, setIsEditing] = useState(false);
  state = { isEditing: false, text: '' };
  // const [text, setText] = useState('');
  // const editInputRef = useRef(null);
  // const dispatch = useDispatch();

  startEditTodo = () => {
    this.setState({ idEditing: true, text: this.props.title });
    console.log('edit');
  };

  cancelEdit = () => {
    this.setState((prev) => ({ ...prev, isEditing: false }));
  };

  confirmEditTodo = (id, text) => {
    this.props.dispatch(editTodoAction(id, text));
    this.setState((prev) => ({ ...prev, isEditing: false }));
  };

  onCompleteTodo = (id, completed) => {
    this.props.dispatch(completeTodoAction(id, completed));
  };

  onDeleteTodo = (id) => {
    this.props.dispatch(deleteTodoAction(id));
  };

  // useEffect(() => {
  //   if (isEditing) {
  //     editInputRef.current.focus();
  //     editInputRef.current.selectionStart = editInputRef.current.value.length;
  //   }
  // }, [isEditing]);

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.todo}>
          <input
            className={`${this.props.completed ? 'styles.checked' : ''}`}
            type="checkbox"
            id={this.props.id}
            checked={this.props.completed}
            onChange={() => this.onCompleteTodo(this.props.id, this.props.completed)}
          />
          {this.state.isEditing ? (
            <textarea
              // ref={editInputRef}
              className={styles.editTodo}
              type="text"
              name="edit-todo"
              value={this.state.text}
              onChange={({ target }) => {
                this.setState((prev) => ({ prev, text: target.value }));
              }}
              // onBlur={() => editInputRef.current.focus()}
            />
          ) : (
            <label
              className={`${
                this.props.completed
                  ? styles.checkedLabel + ' ' + styles.todoLabel
                  : styles.todoLabel
              }`}
            >
              {this.props.title}
            </label>
          )}
        </div>
        <div className={styles.buttons}>
          {this.state.isEditing ? (
            <Button
              title={'Подтвердить'}
              onClick={() => this.confirmEditTodo(this.props.id, this.state.text)}
            >
              <MdDone size="20" fill="#00c700" />
            </Button>
          ) : (
            <Button title={'Редактировать'} onClick={this.startEditTodo}>
              <MdOutlineEdit size="20" fill="#6a75fd" />
            </Button>
          )}

          {this.state.isEditing ? (
            <Button title={'Отмена'} onClick={this.cancelEdit}>
              <MdClose size="20" fill="#ff4e4e" />
            </Button>
          ) : (
            <Button title={'Удалить'} onClick={() => this.onDeleteTodo(this.props.id)}>
              <MdOutlineDelete size="20" fill="#ff4e4e" />
            </Button>
          )}
        </div>
      </div>
    );
  }
}

TodoContainer.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  onCompleteTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};

export const Todo = connect()(TodoContainer);
