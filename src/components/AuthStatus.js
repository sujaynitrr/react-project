import { useAuth } from "../context/AuthContextProvider";

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? "Logout" : "Login"}
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "logout" : "login"}
      </button>
      {isAuthenticated}
    </div>
  );
};
export default AuthStatus;
