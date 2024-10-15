import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const addHandle = () => {
    setCount(count + 1);
  };
  const subHandle = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetaHandle = () => {
    setCount(0);
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Use State Hooks Assignament</h1>
      <h4 className="my-3">React Js project</h4>

      <h1 className="my-3">Count :: {count}</h1>
      <button onClick={addHandle} className="btn btn-primary mx-2">
        ADD
      </button>
      <button
        onClick={subHandle}
        disabled={count === 0}
        className="btn btn-info mx-3"
      >
        Subtract
      </button>
      <button
        onClick={resetaHandle}
        disabled={count === 0}
        className="btn btn-danger"
      >
        Reset
      </button>
    </div>
  );
}
