import React, { useState } from "react";

const UseCallback = () => {
  const [age, setAge] = useState(99);
  const handleClick = () => setAge(age + 1);
  const someValue = "someValue";
  const doSomething = () => {
    return someValue;
  };

  return (
    <div>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </div>
  );
};

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: "2px", background: "papayawhip", padding: "1rem" }}>Today I am {age} Years of Age</div>
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
};

const Instructions = () => {
  console.log("render instructions");
  return (
    <div style={{ background: "black", color: "yellow", padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
};

export default UseCallback;
