import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Box } from './Box.styled';

import { fetchPictures } from './Utils/fetchPictures';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Utils/Loader';
import { notify } from './Utils/notify';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import Searchbar from './Searchbar/Searchbar';
import Modal from '../components/Modal/Modal';

class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      fetchPictures(query)
        .then(response => {
          this.setState({
            images: response,
            isLoading: false,
          });
        })
        .catch(error =>
          this.setState({
            error,
            isLoading: false,
          })
        );
    }

    if (prevState.page !== page) {
      fetchPictures(query, page)
        .then(response =>
          this.setState(prevState => ({
            images: prevState.images.concat(response),
            isLoading: false,
          }))
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  }

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleSearchbarSubmit = query => {
    this.setState({ query, isLoading: true });
  };

  onLoadMoreButtonClick = () => {
    this.setState(prevState => ({ isLoading: true, page: prevState.page + 1 }));
  };

  render() {
    const { query, images, status, showModal, modalImage, isLoading, error } =
      this.state;
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
          <Searchbar handleSearchbarSubmit={this.handleSearchbarSubmit} />
          {isLoading && <Loader />}
          {error && notify(error.message)}
          {!images.length ? (
            <h1>Choose what do you want to find!</h1>
          ) : (
            <>
              <ImageGallery
                query={query}
                images={images}
                status={status}
                openModal={this.openModal}
                onLoadMoreButtonClick={this.onLoadMoreButtonClick}
              />
              <ButtonLoadMore
                onLoadMoreButtonClick={this.onLoadMoreButtonClick}
              />
            </>
          )}
        </Box>
        {showModal && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImage} alt={query} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
