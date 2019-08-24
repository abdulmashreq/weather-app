import axios from 'axios';

export const gallery = () => axios
  .get(`http://localhost:4002/api/photo`)
  .then(response => response.data)
  .catch(error => error);
