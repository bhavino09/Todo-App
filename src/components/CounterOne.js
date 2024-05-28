import React from "react";
import "./CounterOne.css";
import useCounter from "../hooks/useCounter";
function CounterOne() {
  const [count, handleDecrement, handleReset, handleIncrement] = useCounter(
    0,
    1
  );
  return (
    <div className="counter">
      <div className="incre-decre">
        <button onClick={handleDecrement}>-</button>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
