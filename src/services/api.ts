import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.30:3333', // IP da máquina Windows
});

export default api;
