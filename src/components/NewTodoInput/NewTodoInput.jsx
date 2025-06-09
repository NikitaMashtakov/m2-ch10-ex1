import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { connect } from 'react-redux';
import { addTodoAction } from 'actions/addTodoAction';
import { Component } from 'react';

class NewTodoInputContainer extends Component {
  state = { text: '' };

  constructor(buttonName, placeholder) {
    super(buttonName, placeholder);
    this.state = { text: '' };
  }

  onButtonClick = () => {
    this.props.addTodoAction(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div className="flex items-center justify-between pt-[5px] pr-[5px] pb-[5px] pl-0 g-[10px] border-b-1 border-b-[#1d1d1d} focus:border-none focus:outline-none">
        <input
          name="new-todo"
          className="border-none p-[5px] flex-1 text-xl"
          type="text"
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={({ target }) => this.setState({ text: target.value })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && this.state.text) {
              this.onButtonClick();
            }
          }}
        />
        <Button
          onClick={() => {
            if (this.state.text) {
              this.onButtonClick();
            }
          }}
          style={{ border: '1px solid #ccc' }}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}
NewTodoInputContainer.propTypes = {
  buttonName: PropTypes.string,
  placeholder: PropTypes.string,
  onAddTodo: PropTypes.func,
};

export default connect(null, { addTodoAction })(NewTodoInputContainer);
