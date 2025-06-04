import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { useCallback, useMemo, useState } from 'react';
import debounce from 'utils/debounce';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(
    (value) => dispatch({ type: 'SET_SEARCH', payload: value }),
    [dispatch],
  );

  const debouncedSearch = useMemo(
    () => debounce(memoizedDispatch, 250),
    [memoizedDispatch],
  );

  const searchHandler = (value) => {
    setValue(value);
    debouncedSearch(value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="search"
        value={value}
        placeholder="Поиск..."
        onChange={({ target }) => searchHandler(target.value)}
      />
    </div>
  );
};
