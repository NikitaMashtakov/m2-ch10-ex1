import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { createRef, Component } from 'react';
import { MdOutlineEdit, MdOutlineDelete, MdDone, MdClose } from 'react-icons/md';
// import styles from './Todo.module.css';
import { connect } from 'react-redux';
import { completeTodoAction } from 'actions/completeTodoAction';
import { deleteTodoAction } from 'actions/deleteTodoAction';
import { editTodoAction } from 'actions/editTodoAction';

export class TodoContainer extends Component {
  state = { isEditing: false, text: '' };

  constructor(id, title, completed) {
    super(id, title, completed);
    this.editInputRef = createRef();
  }

  startEditTodo = () => {
    this.setState({ isEditing: true, text: this.props.title });
    console.log('edit');
  };

  cancelEdit = () => {
    this.setState({ isEditing: false });
  };

  confirmEditTodo = () => {
    this.props.editTodoAction(this.props.id, this.state.text);
    this.setState({ isEditing: false });
  };

  onCompleteTodo = () => {
    this.props.completeTodoAction(this.props.id, this.props.completed);
  };

  onDeleteTodo = () => {
    this.props.deleteTodoAction(this.props.id);
  };

  componentDidUpdate() {
    if (this.state.isEditing) {
      this.editInputRef.current.focus();
      this.editInputRef.current.selectionStart = this.editInputRef.current.value.length;
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            className={`${this.props.completed ? 'styles.checked' : ''}`}
            type="checkbox"
            id={this.props.id}
            checked={this.props.completed}
            onChange={this.onCompleteTodo}
          />
          {this.state.isEditing ? (
            <textarea
              ref={this.editInputRef}
              type="text"
              name="edit-todo"
              value={this.state.text}
              onChange={({ target }) => {
                this.setState({ text: target.value });
              }}
              onBlur={() => this.editInputRef.current.focus()}
            />
          ) : (
            <label htmlFor={this.props.id}>{this.props.title}</label>
          )}
        </div>
        <div>
          {this.state.isEditing ? (
            <Button title={'Подтвердить'} onClick={this.confirmEditTodo}>
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
            <Button title={'Удалить'} onClick={this.onDeleteTodo}>
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

export const Todo = connect(null, {
  editTodoAction,
  completeTodoAction,
  deleteTodoAction,
})(TodoContainer);
