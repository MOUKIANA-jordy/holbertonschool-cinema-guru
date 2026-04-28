import './auth.css';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth-container">
      <div className="auth-switch">
        <Button label="Sign In" onClick={() => setSwitch(true)} />
        <Button label="Sign Up" onClick={() => setSwitch(false)} />
      </div>

      <div className="auth-form">
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        )}
      </div>
    </div>
  );
}

export default Authentication;
