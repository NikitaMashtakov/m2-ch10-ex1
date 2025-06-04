import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { Component } from 'react';
export class Button extends Component {
  render() {
    return (
      <button
        className="items-center flex justify-center border-0 p-[5px] rounded-sm w-max hover:bg-[#d8d8d89c]"
        // className={styles.button}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.element,
};
