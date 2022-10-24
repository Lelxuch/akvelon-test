import axios from 'axios';
import getBaseUrl from '../helpers/baseUrl';

const baseURL: string | undefined = getBaseUrl() ? getBaseUrl() : '';

const getUsers = () => {
  return axios({
    method: 'get',
    url: baseURL + '/api/getUsers',
  })
}

export const usersService = {
  getUsers
};
