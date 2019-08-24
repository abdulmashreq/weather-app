import axios from 'axios';

export const cities = () => axios
  .get(`http://localhost:4002/api/cities`)
  .then(response => response.data)
  .catch(error => error);

export const city = (code) => axios
  .get(`http://localhost:4002/api/cities/`+code)
  .then(response => response.data)
  .catch(error => error);
