import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  // headers: {
  //   'locale': 'ko',
  // },
};

const instance = axios.create(config);

export default instance;
