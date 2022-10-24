import { LOGIN, REGISTER, USERS, UNKNOWN } from './path';
import IRoute from '../interfaces/IRoute';

import Login from '../pages/Authorization/Login/index';
import Register from '../pages/Authorization/Register/index';

const routes: IRoute[] = [
  {
    id: 1,
    path: LOGIN,
    page: <Login />,
    private: false,
  },
  {
    id: 2,
    path: REGISTER,
    page: <Register />,
    private: false
  },
  {
    id: 3,
    path: USERS,
    page: <Login />,
    private: true
  },
  {
    id: 4,
    path: UNKNOWN,
    page: <Login />,
    private: false
  }
]

export default routes;
