import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard">
      <Header
        userUsername={userUsername}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div style={{ display: 'flex' }}>
        <SideBar />

        <div style={{ flex: 1, padding: '20px' }}>
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
