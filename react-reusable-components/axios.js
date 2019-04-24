// This an example on how to create axios instance and use it in different parts of our applications 
import axios from 'axios';
import ApiKey from './secretVariables.json';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + ApiKey.key
  }
});
