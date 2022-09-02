import PropTypes from 'prop-types';
import { StyledButton } from './StyledButtonLoadmore';

export const ButtonLoadMore = ({ onLoadMore }) => (
  <StyledButton>
    <button type="button" onClick={onLoadMore}>
      Load more
    </button>
  </StyledButton>
);

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
