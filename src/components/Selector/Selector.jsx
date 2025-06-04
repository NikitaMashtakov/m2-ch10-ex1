import PropTypes from 'prop-types';
import styles from './Selector.module.css';
import Select from 'react-select';

export const Selector = ({ selectorId, options, onSetSelected }) => {
  return (
    <div className={styles.container}>
      <Select
        styles={{ height: '38px' }}
        name={selectorId}
        options={options}
        defaultValue={options[0]}
        onChange={({ value }) => {
          onSetSelected(value);
        }}
      />
    </div>
  );
};

Selector.propTypes = {
  selectorId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onSetSelected: PropTypes.func,
};
