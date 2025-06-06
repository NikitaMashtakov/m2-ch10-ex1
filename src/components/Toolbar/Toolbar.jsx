import { Component } from 'react';
import styles from './Toolbar.module.css';
import PropTypes from 'prop-types';

export class Toolbar extends Component {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}

Toolbar.propTypes = {
  children: PropTypes.node,
};
