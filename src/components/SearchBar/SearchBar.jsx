import styles from './SearchBar.module.css';
import { connect, useDispatch } from 'react-redux';
import { Component, useCallback, useMemo, useState } from 'react';
import debounce from 'utils/debounce';

class SearchBarContainer extends Component {
  state = { value: '' };
  // memoizedDispatch = null;

  // const [value, setValue] = useState('');
  // const dispatch = useDispatch();
  debouncedSearch = null;
  // componentDidMount() {
  memoizedDispatch(value) {
    this.props.dispatch({ type: 'SET_SEARCH', payload: value });
    console.log('mount');
  }
  deb = (value) => {
    debounce(this.memoizedDispatch(value), 2500);
  };
  // getSnapshotBeforeUpdate() {
  //   this.debouncedSearch = (value) => debounce(this.memoizedDispatch(value), 250);
  // }

  searchHandler = (value) => {
    console.log('handler');
    console.log(this.memoizedDispatch);
    this.setState({ value });
    console.log(this.debouncedSearch);
    this.deb(this.state.value);
  };

  render() {
    return (
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          name="search"
          value={this.state.value}
          placeholder="Поиск..."
          onChange={({ target }) => this.searchHandler(target.value)}
        />
      </div>
    );
  }
}

export const SearchBar = connect()(SearchBarContainer);
