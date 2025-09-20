import axios from 'axios';
import { getToken, clearForLogout } from '@/shared/utils/auth';
import router from '@/router';

// import { errorsAlert, netwokErrorAlert } from './requestAlerts';
// import i18n from "@/plugins/i18n";

export let cancelLoading = {
  loading: false,
};

const service = axios.create({
  baseURL: import.meta.env.VUE_APP_API_BASE_URL,
  timeout: 30000 // request timeout
});

service.interceptors.request.use(
  config => {
    loaderIncrease(config);
    let token = getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    loaderDecrease(response.config);
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    loaderDecrease(error.config);
    if (error.response && (error.response.status == 401)) {
      errorsAlert(error.response);
      if (error.response.status == 401) {
          logout();
      }
    } else if (error.response) {
      errorsAlert(error.response);
    }
    return Promise.reject(error.response);
  }
);

function logout() {
  clearForLogout();
  if (router.currentRoute.name != 'Login') {
    return router.push({ name: 'Login' });
  }
}

export default service;