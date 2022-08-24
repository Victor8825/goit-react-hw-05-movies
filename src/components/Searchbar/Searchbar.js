import { Component } from 'react';
import { notify } from 'components/Utils/notify';
import PropTypes from 'prop-types';
import { StyledSearchbar } from './Styled.searchbar';

export default class Searchbar extends Component {
  static propTypes = {
    handleSearchbarSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  onInputChange = event => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      notify('Enter text for searching!');
      return;
    }

    this.props.handleSearchbarSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <header>
          <form onSubmit={this.onSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              type="text"
              name="imageName"
              onChange={this.onInputChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </StyledSearchbar>
    );
  }
}
