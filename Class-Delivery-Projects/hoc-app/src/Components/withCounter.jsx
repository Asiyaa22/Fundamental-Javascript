import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const CounterComponent = (props) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return <WrappedComponent {...props} count={count} increment={handleClick} />;
  };

  return CounterComponent;
};

export default withCounter;
