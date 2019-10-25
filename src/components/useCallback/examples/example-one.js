import React, { useState, useCallback } from "react";

const UseCallbackExampleOne = () => {
  const [age, setAge] = useState(99);
  const handleClick = useCallback(() => setAge(a => a + 1), [setAge]);
  const someValue = "someValue";
  const doSomething = useCallback(() => {
    return someValue;
  }, [someValue]);

  return (
    <div>
      <div style={{ border: "2px", background: "papayawhip", padding: "1rem", margin: "1rem 0" }}>Today I am {age} Years of Age</div>
      <Age handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </div>
  );
};

const Age = React.memo(({ handleClick }) => {
  console.log("render age");
  return (
    <div>
      <pre style={{ display: "inline" }}>
        {" "}
        - click the button below
        <span role="img" aria-label="emoji">
          {" "}
          👉{" "}
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
    <div style={{ background: "papayawhip", padding: ".25rem", margin: "1rem 0" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
});

export default UseCallbackExampleOne;
