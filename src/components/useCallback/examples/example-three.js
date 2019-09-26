import React, { useState, useRef, useCallback } from "react";

const useCountRenders = () => {
  const renders = useRef(0);
  console.log("renders", renders.current++);
};

const Hello = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={increment}>hello</button>;
});

const Square = React.memo(({ n, increment }) => {
  useCountRenders();
  return <button onClick={increment(n)}>{n}</button>;
});

export const UseCallbackExampleThree = () => {
  const [count, setCount] = useState(0);
  const favNums = [3, 7, 11];

  const addOne = useCallback(() => setCount(c => c + 1), [setCount]);
  const increment = useCallback(n => setCount(c => c + n), [setCount]);

  return (
    <div>
      <Hello increment={addOne} />
      <div>count: {count}</div>
      {favNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default UseCallbackExampleThree;
