import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const token_seguridad = window.localStorage.getItem("token_seguridad");
    if (token_seguridad) {
      config.headers.Authorization = "Bearer " + token_seguridad;
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const requestGeneric = {
  get: (url) => axios.get(url),
  post: (url, body) => axios.post(url, body),
  put: (url, body) => axios.put(url, body),
<<<<<<< HEAD
  delete: (url) => axios.delete(url),
=======
  // delete: (url) => axios.delete(url),
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
};
export default requestGeneric;
