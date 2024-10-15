import React, { useState, useTransition } from 'react';

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  function changeHandle(event) {
    setVal(event.target.value);
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push(event.target.value);
      }
      setItems(arr);
    });
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Use Transition Hook</h1>
      <h4 className="my-3">React Js project</h4>
      <input type="text" value={val} onChange={changeHandle}></input>
      {isPending ? "loading...." : items.map((item, i) => (
        <div key={i}>{item}</div> 
      ))}
    </div>
  );
}
