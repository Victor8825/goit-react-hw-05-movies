import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Box } from './Box.styled';

import { fetchPictures } from './Utils/fetchPictures';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Utils/Loader';
import { notify } from './Utils/notify';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from '../components/Modal/Modal';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchPictures(query, page)
      .then(response => {
        if (response.length === 0) {
          notify('There is no images by this query');
          setIsLoading(false);
          return;
        }

        setImages(prevState => [...prevState, ...response]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [page, query]);

  const openModal = largeImageURL => {
    setShowModal(true);
    setModalImage(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearchbarSubmit = query => {
    setPage(1);
    setQuery(query);
    setImages([]);
    setIsLoading(true);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        pb="24px"
        textAlign="center"
      >
        <Searchbar handleSearchbarSubmit={handleSearchbarSubmit} />
        {isLoading && <Loader />}
        {error && notify(error.message)}
        {!images.length ? (
          <h1>Choose what do you want to find!</h1>
        ) : (
          <>
            <ImageGallery query={query} images={images} openModal={openModal} />
            <ButtonLoadMore onLoadMore={onLoadMore} />
          </>
        )}
      </Box>
      {showModal && (
        <Modal closeModal={closeModal}>
          <img src={modalImage} alt={query} />
        </Modal>
      )}
    </>
  );
};
