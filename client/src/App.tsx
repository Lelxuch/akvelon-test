import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import { Navigate } from 'react-router-dom';
import { LOGIN, REGISTER, USERS, UNKNOWN } from './config/path';

import Login from './pages/Authorization/Login/index';
import Register from './pages/Authorization/Register/index';
import Users from './pages/Users/index';
import NotFound from './pages/NotFound';

import PrivateRoute from './helpers/privateRoute';

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path={USERS} element={<Users />} />
          </Route>
          <Route path={UNKNOWN} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
