import React, { useState, useMemo } from "react";

const waitSync = ms => {
  console.log("wait...");
  const done = Date.now() + ms;
  while (done > Date.now()) {
    // sleep...
  }
  console.log("done.");
};

export const UseMemoExampleTwo = () => {
  const [count, setCount] = useState(0);

  const expFunc = count => {
    waitSync(1800);
    return count * 90;
  };

  const resCount = useMemo(() => {
    return expFunc(count);
  }, [count]);

  return (
    <>
      Count: {resCount}
      <input type="text" onChange={e => setCount(e.target.value)} value={count} placeholder="Set Count" />
      <button onClick={() => setCount(73)}>73</button>
    </>
  );
};

export default UseMemoExampleTwo;
