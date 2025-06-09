import { connect } from 'react-redux';
import { Component } from 'react';
import debounce from 'utils/debounce';

class SearchBarContainer extends Component {
  state = { value: '' };
  debouncedSearch = debounce(this.props.dispatch, 500);

  searchHandler = (value) => {
    this.setState({ value });
    this.debouncedSearch({ type: 'SET_SEARCH', payload: value });
  };

  render() {
    return (
      <div className="flex-3 p-[5px]">
        <input
          className="py-[6px] px-[10px] w-full border-1 border-[#ccc] rounded-[4px] text-xl"
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
