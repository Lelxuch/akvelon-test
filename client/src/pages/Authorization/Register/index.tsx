import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { authService } from '../../../services/authService';
import { LOGIN } from '../../../config/path'
import './index.scss'

function Register() {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [password, setPassword] = useState('')
  // const [repPpassword, setRepPassword] = useState('')

  const navigate = useNavigate();

  const submit = async () => {
    if (username && firstName && secondName && password) {
      authService
        .register(username, firstName, secondName, password)
        .then(response => {
          navigate(LOGIN)
        })
        .catch((error) => {
          window.alert("Error");
        })
    } else {
      window.alert("Missing field");
    }
  }

  return (
    <div className="register-outer d-flex justify-content-center align-items-center">
      <form className="register text-center">
        <h3 className="mb-3">Akvelon</h3>
        <input className="form-control mb-3" onChange={e => setUsername(e.target.value)} placeholder="Username" type="text"/>
        <input className="form-control mb-3" onChange={e => setFirstName(e.target.value)} placeholder="First name" type="text"/>
        <input className="form-control mb-3" onChange={e => setSecondName(e.target.value)} placeholder="Second name" type="text"/>
        <input className="form-control mb-2" onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
        {/*<input className="form-control mb-2" placeholder="Repeat password" type="password"/>*/}
        <div className="d-flex justify-content-end mb-2">
          <Link to={LOGIN}>Sign in</Link>
        </div>
        <button className="btn btn-primary w-100" onClick={submit} type="button">Sign up</button>
      </form>
    </div>
  );
}

export default Register;
