import React from "react";
import { useSelector, useDispatch } from "react-redux";

const AnyComponent = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "inc" });
  };

  const decrement = () => {
    dispatch({ type: "dec" });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default AnyComponent;
