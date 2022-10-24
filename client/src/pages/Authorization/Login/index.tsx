import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { authService } from '../../../services/authService';
import { USERS, LOGIN, REGISTER } from '../../../config/path'
import './index.scss'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async () => {
    if (username && password) {
      authService
        .login(username, password)
        .then(response => {
          navigate(USERS)
        })
        .catch((error) => {
          setUsername('')
          setPassword('')
        })
    }
  }

  return (
    <div className="login-outer d-flex justify-content-center align-items-center">
      <form className="login text-center">
        <h3>Akvelon</h3>
        <input className="form-control mt-3 mb-3" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" type="text"/>
        <input className="form-control mb-2" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <div className="d-flex justify-content-end mb-2">
          <Link to={REGISTER}>Sign up</Link>
        </div>
        <button className="btn btn-primary w-100" onClick={submit} type="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
