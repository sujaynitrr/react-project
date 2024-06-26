import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>Welcome in React world</p>
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
