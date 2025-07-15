// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

// Request Logger
api.interceptors.request.use((config) => {
  console.log(`[Request] ${config.method.toUpperCase()} ${config.url}`, config);
  return config;
}, (error) => {
  console.error('[Request Error]', error);
  return Promise.reject(error);
});

// Response Logger
api.interceptors.response.use((response) => {
  console.log(`[Response]`, response);
  return response;
}, (error) => {
  console.error('[Response Error]', error.response || error.message);
  return Promise.reject(error);
});

export default api;
