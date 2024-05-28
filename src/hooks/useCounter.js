import { useState } from "react";

function useCounter(initialcount = 0, value) {
  const [count, setCount] = useState(initialcount);
  function handleDecrement() {
    setCount(count - value);
  }
  function handleReset() {
    setCount(initialcount);
  }
  function handleIncrement() {
    setCount(count + value);
  }
  return [count, handleDecrement, handleReset, handleIncrement];
}

export default useCounter;
