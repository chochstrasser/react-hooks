import React, { useEffect, useState, useMemo } from "react";

let count = 0;

const ChildComponent = props => {
  useEffect(() => {
    count += 1;
  });
  return <div>Render Count: {count}</div>;
};

const UseMemoExampleThree = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("non-memo");
    setCount(prevCount => prevCount + 1);
  };

  const memoizedChildComponent = useMemo(() => {
    console.log("memo");
    return <ChildComponent />;
  }, []);

  return (
    <div className="App">
      <h1>React Hooks - useMemo</h1>
      <p>In React, when a component's state or props change, that component is re-rendered along with any of it's child components.</p>
      <p>
        The <code>useMemo</code> hook allows you to memoize a child component and only re-render it if certain props or state changes....or
        not at all.
      </p>
      <p>
        <code>useMemo</code> is also a perfect use case for derived state.
      </p>

      <p>In this demo, we are rendering the same child component twice. One as a memoized component and one as a non-memoized component.</p>
      <p>
        The render count for each child instance is on the page so you can see which components re-render in response to the parent
        component's state changes.
      </p>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment Count</button>
      <h3>Non-Memoized Nested Component:</h3>
      <ChildComponent />
      <h3>Memoized Child Component:</h3>
      {memoizedChildComponent}
    </div>
  );
};

export default UseMemoExampleThree;
