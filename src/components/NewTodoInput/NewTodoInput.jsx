import { useState } from 'react';
import styles from './NewTodoInput.module.css';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { connect, useDispatch } from 'react-redux';
import { addTodoAction } from 'actions/addTodoAction';
import { Component } from 'react';

class NewTodoInputContainer extends Component {
  state = { text: '' };
  // buttonName, placeholder
  constructor(buttonName, placeholder, ...props) {
    super(buttonName, placeholder, ...props);
    this.state = { text: '' };
  }

  onButtonClick = () => {
    this.props.dispatch(addTodoAction(this.state.text));
    this.setState('');
  };

  render() {
    return (
      <div className={styles.container}>
        <input
          className={styles.input}
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
  dispatch: PropTypes.func,
};

export const NewTodoInput = connect()(NewTodoInputContainer);
