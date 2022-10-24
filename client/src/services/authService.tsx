import axios from 'axios';
import getBaseUrl from '../helpers/baseUrl';
import { useNavigate } from 'react-router-dom';

const baseURL: string | undefined = getBaseUrl() ? getBaseUrl() : '';

const register = (username: string, firstName: string, secondName: string, password: string) => {
  return axios({
    method: 'post',
    url: baseURL + '/api/register',
    data: {
      username,
      firstName,
      secondName,
      password,
    },
  })
}

const login = (username: string, password: string) => {
  localStorage.setItem('token', "temp-token");
  localStorage.setItem('username', username);

  return axios({
    method: 'post',
    url: baseURL + 'api/login',
    data: {
      username,
      password,
    },
  }).then((response) => {
    localStorage.setItem('token', response?.data?.token);
  })
}

const logout = (): void => {
  localStorage.clear();
};

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const getUsername = () => {
  return localStorage.getItem('username');
}

export const authService = {
  register,
  login,
  logout,
  isAuthenticated,
  getUsername,
};
