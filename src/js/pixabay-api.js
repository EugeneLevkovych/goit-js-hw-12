import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const axiosOtions = {
    params: {
      key: '48247224-415eb498da8da81883dddb739',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  };
  return axios.get(`https://pixabay.com/api/`, axiosOtions);
};
