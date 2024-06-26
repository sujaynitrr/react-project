import React from "react";
import ReactDOM from "react-dom";
import AuthStatus from "./src/Components/AuthStatus";
import AuthProvider, { useAuth } from "./src/contexts/AuthProvider";
import Dashboard from "./src/Components/Dashboard";

const App = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Dashboard />;
  }
  return <AuthStatus />;
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
