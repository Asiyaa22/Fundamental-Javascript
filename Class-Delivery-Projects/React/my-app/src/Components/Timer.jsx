import React, { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick ⏱️");
    }, 1000);

    return () => {
      clearInterval(interval); // cleanup before unmount
      console.log("Timer stopped ❌");
    };
  }, []);

  return <h3>Timer Running...</h3>;
}

export default Timer;
