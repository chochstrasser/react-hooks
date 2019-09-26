import React, { useState, useCallback } from "react";

const functions = new Set();

const UseCallbackExampleTwo = () => {
  const [callbackCount, setCallbackCount] = useState(0);

  const callbackFunction = useCallback(() => {
    setCallbackCount(a => a + 1);
  }, [setCallbackCount]);

  functions.add(callbackFunction);

  return (
    <>
      <ChildComponent value={callbackCount} />
      <div>functions: {functions.size}</div>
      <button onClick={callbackFunction}>Change callback count</button>
    </>
  );
};

const ChildComponent = React.memo(({ value }) => {
  return <>Child : {value}</>;
});

export default UseCallbackExampleTwo;
