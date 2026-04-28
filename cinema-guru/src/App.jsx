import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// ⚠️ ces composants seront créés plus tard
import Dashboard from './routes/Dashboard';
import Authentication from './routes/Authentication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) return;

    axios.post(
      'http://localhost:8000/api/auth/',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setIsLoggedIn(true);
        setUserUsername(res.data.username);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setUserUsername('');
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
