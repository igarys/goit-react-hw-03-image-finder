import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36079957-3576dde99500ac3aadc903693';

export const fetchApi = async (value, page) => {
  const response = await axios.get(
    `${API_URL}?key=${API_KEY}&q=${value}&per_page=12&page=${page}`
  );
  console.log(` ${response.data.hits}`);
  return response.data.hits;
};
