import React, { useReducer } from 'react';

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};


function Reducer_hooks() {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Use Reducer Assignment</h1>
      <h4 className="my-3">React JS Project</h4>
      <h1>Count: {count}</h1>
      <button className="btn btn-success mx-3"onClick={() => dispatch("Increment")} disabled={count===10}>Increment</button>
    
      <button className="btn btn-dark"onClick={() => dispatch("Decrement")} disabled={count===0}>Decrement</button>
    </div>
  );
}

export default Reducer_hooks;
