import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPictures = async (query, page = 1) => {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    key: '28318270-6b0da933c6f7f5e767acec2c6',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`?${searchParams}`);

  const readyArrayOfImages = response.data.hits.map(
    ({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })
  );
  return readyArrayOfImages;
};
