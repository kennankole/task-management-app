import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  'Content-Type': 'application/json',
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = window.localStorage.getItem('authToken');

//   if (token) {
//     config.headers.Authorization = token;
//   }
//   return config;
// })
export default axiosInstance;