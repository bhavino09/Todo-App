import React from "react";
import "./CounterTwo.css";
import useCounter from "../hooks/useCounter";
function CounterTwo() {
  const [count, handleDecrement, handleReset, handleIncrement] = useCounter(
    10,
    10
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

export default CounterTwo;
