import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(5));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {isLogged ? <h3>Valuable information</h3> : ""}
    </div>
  );
}

export default App;
