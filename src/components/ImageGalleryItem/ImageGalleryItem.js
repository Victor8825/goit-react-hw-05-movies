import PropTypes from 'prop-types';
import { StyledGalleryImageItem } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  query,
  openModal,
}) => (
  <StyledGalleryImageItem>
    <li>
      <img
        src={webformatURL}
        alt={query}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  </StyledGalleryImageItem>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
