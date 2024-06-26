import React from "react";
import ReactDOM from "react-dom";
import store from "./src/store";
import { Provider } from "react-redux";
import Count from "./src/components/Count";

const App = () => {
  return (
    <div>
      <p>Welcome in React world</p>
      <Count />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
