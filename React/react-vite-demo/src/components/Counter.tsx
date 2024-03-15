import { useState } from "react";

const Counter = () => {
  // console.log(useState());
  const [count, setCount] = useState<number>(1); // [undefined, function]
  // count => state variable
  // setCount => stateFunction
  function increment() {
    setCount((current) => {
      return current + 1;
    });
  }

  function decrement() {
    setCount((current) => {
      return current - 1;
    });
  }

  function reset() {
    setCount(() => {
      return 0;
    });
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
