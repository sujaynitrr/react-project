import React from "react";
import ReactDOM from "react-dom";
import AuthContextProvider from "./src/context/AuthContextProvider";
import AuthStatus from "./src/Components/AuthStatus";

const App = () => {
  return (
    <div>
      <AuthStatus />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
