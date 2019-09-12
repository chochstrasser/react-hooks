import React, { useState, useCallback } from "react";

const UseCallback = () => {
  const [age, setAge] = useState(99);
  const handleClick = useCallback(() => setAge(a => a + 1), [setAge]);
  const someValue = "someValue";
  const doSomething = useCallback(() => {
    return someValue;
  }, [someValue]);

  return (
    <div>
      <div style={{ border: "2px", background: "papayawhip", padding: "1rem" }}>Today I am {age} Years of Age</div>
      <Age handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </div>
  );
};

const Age = React.memo(({ handleClick }) => {
  console.log("render age");
  return (
    <div>
      <pre>
        {" "}
        - click the button below
        <span role="img" aria-label="emoji">
          👇
        </span>
      </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  );
});

const Instructions = React.memo(props => {
  console.log("render instructions");
  console.log("render instructions props", props);
  return (
    <div style={{ background: "black", color: "yellow", padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
});

export default UseCallback;
