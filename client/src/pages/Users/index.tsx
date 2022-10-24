import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { authService } from '../../services/authService';
import { usersService } from '../../services/usersService';
import { LOGIN } from '../../config/path';
import './index.scss'

function Users() {

  const [users, setUsers] = useState<any[]>([])
  const [username, setUsername] = useState<string>('')

  const navigate = useNavigate();

  const logout = () => {
    authService
      .logout()
    navigate(LOGIN);
  }

  const fetchData = () => {
    usersService
      .getUsers()
      .then((res: any) => {
        setUsers(res.data);
      })
    let tempUsername = authService.getUsername();
    setUsername(tempUsername ? tempUsername : '')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>

      <header className="container d-flex justify-content-between align-items-center pt-3 pb-3">
        <h3>Akvelon</h3>
        <button className="btn btn-primary" onClick={logout}>Logout</button>
      </header>

      <div className="container">

        <h3 className="mt-5">Hello, {username}</h3>

        <table className="table table-light mt-3">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
          </tr>
          </thead>
          <tbody>
          {users && Object.entries(users).map((row: any, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{row[1].username}</td>
                <td>{row[1].firstName}</td>
                <td>{row[1].secondName}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Users;
