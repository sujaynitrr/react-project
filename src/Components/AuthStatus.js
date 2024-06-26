import { useContext } from "react";
import { useAuth } from "../contexts/AuthProvider";

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <p>{isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default AuthStatus;
