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

  confirmEditTodo = (id, text) => {
    this.props.editTodoAction(id, text);
    this.setState({ isEditing: false });
  };

  onCompleteTodo = (id, completed) => {
    this.props.completeTodoAction(id, completed);
  };

  onDeleteTodo = (id) => {
    this.props.deleteTodoAction(id);
  };

  componentDidUpdate() {
    if (this.state.isEditing) {
      this.editInputRef.current.focus();
      this.editInputRef.current.selectionStart = this.editInputRef.current.value.length;
    }
  }

  render() {
    return (
      <div className="flex justify-between gap-[5px] p-[5px] border-b-[1px] border-black">
        <div className="flex items-center justify-between gap-[10px] text-xl overflow-hidden w-full">
          <input
            className="appearance-none w-6 h-6 rounded-xs border-[0.15em] border-[#69aaff] outline-none cursor-pointer checked:before:content-['\2714'] checked:before:text-xl checked:before:text-white checked:before:absolute checked:before:right-[-2px] checked:before:top-[-5px] checked:bg-[#69aaff] checked:relative"
            type="checkbox"
            id={this.props.id}
            checked={this.props.completed}
            onChange={() => this.onCompleteTodo(this.props.id, this.props.completed)}
          />

          {this.state.isEditing ? (
            <textarea
              ref={this.editInputRef}
              className="flex flex-1 text-xl border-0 w-full overflow-scroll resize-none focus:border-none focus:outline-none focus:bg-[#ececec]"
              type="text"
              name="edit-todo"
              value={this.state.text}
              onChange={({ target }) => {
                this.setState({ text: target.value });
              }}
              onBlur={() => this.editInputRef.current.focus()}
            />
          ) : (
            <>
              <label
                htmlFor={this.props.id}
                className={`flex flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis decoration-none cursor-pointer ${
                  this.props.completed ? 'line-through' : ''
                }`}
              >
                {this.props.title}
              </label>
            </>
          )}
        </div>
        <div className="flex items-center justify-center gap-[10px]">
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
  editTodoAction: PropTypes.func,
  completeTodoAction: PropTypes.func,
  deleteTodoAction: PropTypes.func,
};

export const Todo = connect(null, {
  editTodoAction,
  completeTodoAction,
  deleteTodoAction,
})(TodoContainer);
