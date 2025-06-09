import { Component } from 'react';
import PropTypes from 'prop-types';

export class Toolbar extends Component {
  render() {
    return (
      <div className="flex justify-between flex-col md:flex-row">
        {this.props.children}
      </div>
    );
  }
}

Toolbar.propTypes = {
  children: PropTypes.node,
};
