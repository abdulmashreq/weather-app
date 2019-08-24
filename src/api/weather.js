import axios from 'axios';

export const toronto = () => axios
  .get(`https://www.theweathernetwork.com/api/obsdata/caon0696/c?ref=rt`)
  .then(response => response.data)
  .catch(error => error);

export const montreal = () => axios
  .get(`https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt`)
  .then(response => response.data)
  .catch(error => error);
