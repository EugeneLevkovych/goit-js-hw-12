import axios from 'axios';

// const myApiKey = '48247224-415eb498da8da81883dddb739';

// axios.defaults.headers.common['key'] = myApiKey;

export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    key: '48247224-415eb498da8da81883dddb739',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
