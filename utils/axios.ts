import axios, {AxiosError, AxiosInstance} from 'axios';

const Axios: AxiosInstance = axios.create({
  baseURL: 'http://192.168.1.8:8080/',
});

Axios.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      time: new Date(),
    };
    console.log(config, 'request');

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  response => {
    console.log(response, 'r');

    return response;
  },
  (error: AxiosError) => {
    console.log(error.message);

    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default Axios;
