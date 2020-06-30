import axios from 'axios';

export const firebaseApi = axios.create({
  baseURL: 'https://tamago-sushi-bar.firebaseio.com/',
});
