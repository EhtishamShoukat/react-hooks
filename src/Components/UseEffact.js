import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseEffectComponent() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [showName, setShowName] = useState(false);

  useLayoutEffect(() => {
    const generateRandomNumber = () => {
      setRandomNumber(Math.floor(Math.random() * 100));
    };
    const timeoutID = setTimeout(() => {
      generateRandomNumber();
    }, 3000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {}, [showName]);

  const showNameHandle = () => {
    setShowName(!showName);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Use Layout Effect and UseEffect Assignment</h1>
      <h4 className="my-3">React JS Project</h4>
      <h1>Random Number: {randomNumber}</h1>
      <h1 className="my-3">Use Effect Hook Assignment</h1>
      <button className="btn btn-outline-success" onClick={showNameHandle}>
        {showName ? "Hide Name" : "Show Name"}
      </button>
      {showName && <h1>Ehtisham Shoukat</h1>}
    </div>
  );
}
