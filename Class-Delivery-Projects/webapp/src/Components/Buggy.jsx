import React, { useState } from "react";

const BuggyComponent = () => {
  const [counter, setCounter] = useState(0);

  if (counter === 4) {
    // Intentionally throw error
    throw new Error("Crashed on count 3!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
};

export default BuggyComponent;
