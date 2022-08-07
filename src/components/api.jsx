
import axios from 'axios';

const api = async (search, page) => {
  const searchParams = new URLSearchParams({
    q: search,
    page: page,
    key: '28584724-c6de5560208975d9c3d1ef906',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  const { data } = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return data;
};
export default api;