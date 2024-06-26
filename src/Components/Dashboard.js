import { useAuth } from "../contexts/AuthProvider";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <p>Welcome to the dashboard component</p>
    </div>
  );
};

export default Dashboard;
