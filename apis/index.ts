import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  withCredentials: true,
  // headers: {
  //   'locale': 'ko',
  // },
};

const instance = axios.create(config);

export default instance;
