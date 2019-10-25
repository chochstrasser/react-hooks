import React, { useState } from "react";

const UseCallbackExampleFour = () => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <p>Other Count: {otherCounter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  );
};

export default UseCallbackExampleFour;
