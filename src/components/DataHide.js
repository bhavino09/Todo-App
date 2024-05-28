import { useState } from "react";
function DataHide() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {show ? <h1>Hello! Welcome to react-application</h1> : ""}
      <button onClick={handleClick}>Click Here!</button>
    </div>
  );
}
export default DataHide;
