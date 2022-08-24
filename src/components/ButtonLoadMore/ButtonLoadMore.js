import PropTypes from 'prop-types';
import { StyledButton } from './StyledButtonLoadmore';

export const ButtonLoadMore = ({ onLoadMoreButtonClick }) => (
  <StyledButton>
    <button type="button" onClick={onLoadMoreButtonClick}>
      Load more
    </button>
  </StyledButton>
);

ButtonLoadMore.propTypes = {
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};
