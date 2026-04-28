import './auth.css';
import { useState } from 'react';
import axios from 'axios';

import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = _switch
      ? 'http://localhost:8000/api/auth/login'
      : 'http://localhost:8000/api/auth/register';

    axios.post(url, { username, password })
      .then((res) => {
        const token = res.data.accessToken;

        // 🔐 stocker le token
        localStorage.setItem('accessToken', token);

        // ✅ mettre à jour l’état global
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error('Auth error:', err);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-switch">
        <Button label="Sign In" onClick={() => setSwitch(true)} />
        <Button label="Sign Up" onClick={() => setSwitch(false)} />
      </div>

      {/* 🔥 IMPORTANT: form avec onSubmit */}
      <form className="auth-form" onSubmit={handleSubmit}>
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
}

export default Authentication;
