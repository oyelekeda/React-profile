import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(70);

  return (
    <div>
      <p>Counter app</p>
      <p className="text-5xl text-yellow-700">{count}</p>

      <button onClick={() => setCount(count + 1)}>
        <Button text="Add" />
      </button>

      <button onClick={() => setCount(count - 1)}>
        <Button text="Remove" />
      </button>
    </div>
  );
};

export default Counter;

