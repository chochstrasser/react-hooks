import React, { useState, useEffect, useRef, useMemo } from "react";

const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({
      data: state.data,
      loading: true
    }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);

  return state;
};

const computeLongestWord = data => {
  if (!data) {
    return "";
  }
  console.log("computing longest word");
  const { quote } = JSON.parse(data);
  const array = quote.split(" ");
  let result = array[0];
  for (let x = 1; x < array.length; x++) {
    if (result.length < array[x].length) {
      result = array[x];
    }
  }
  const done = Date.now() + 1500;
  while (done > Date.now()) {
    // sleep...
  }
  console.log("found longest word");
  return result;
};

export const UseMemoExampleOne = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch("https://api.kanye.rest/");

  const memoWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>Longest word: {memoWord}</div>
    </div>
  );
};

export default UseMemoExampleOne;
