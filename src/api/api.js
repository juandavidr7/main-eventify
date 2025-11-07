import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://p01--eventify--6qgvyb9b2y9f.code.run/api',
    withCredentials: true
});

apiClient.interceptors.request.use((config) => {
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
  
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  
  return config;
});

export default apiClient;