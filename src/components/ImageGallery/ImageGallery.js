import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './Styled.imageGallery';

export const ImageGallery = ({ images, query, openModal }) => (
  <StyledImageGallery>
    <ul>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          query={query}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  </StyledImageGallery>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,

  query: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
