import { useState } from 'react';
import { notify } from 'components/Utils/notify';
import PropTypes from 'prop-types';
import { StyledSearchbar } from './Styled.searchbar';

export const Searchbar = ({ handleSearchbarSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = e => setInputValue(e.currentTarget.value);

  const onSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      notify('Enter text for searching!');
      return;
    }

    handleSearchbarSubmit(inputValue);
    setInputValue('');
  };

  return (
    <StyledSearchbar>
      <header>
        <form onSubmit={onSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            name="imageName"
            onChange={onInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  handleSearchbarSubmit: PropTypes.func.isRequired,
};
