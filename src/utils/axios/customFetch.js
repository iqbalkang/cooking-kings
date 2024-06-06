import axios from 'axios';

const customFetch = axios.create({
  baseURL: `https://stream-restaurant-menu-svc.herokuapp.com`,
});

export default customFetch;
