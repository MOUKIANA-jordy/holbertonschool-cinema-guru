import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <div className="nav-left">
        <img src="https://picsum.photos/100/100" alt="avatar" width="40" />
        <p>Welcome, {userUsername}</p>
      </div>

      <div className="nav-right" onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Logout</span>
      </div>
    </nav>
  );
}

export default Header;
