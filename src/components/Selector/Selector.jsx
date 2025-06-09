import PropTypes from 'prop-types';
import { Component } from 'react';
import Select from 'react-select';

export class Selector extends Component {
  constructor(selectorId, options, onSetSelected, ...props) {
    super(selectorId, options, onSetSelected, ...props);
  }

  render() {
    return (
      <div className="flex g-[10px] p-[5px] text-xl m-auto">
        <Select
          style={{ height: '38px' }}
          name={this.props.selectorId}
          options={this.props.options}
          defaultValue={this.props.options[0]}
          onChange={({ value }) => this.props.onSetSelected(value)}
        />
      </div>
    );
  }
}

Selector.propTypes = {
  selectorId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onSetSelected: PropTypes.func,
};
