import React, { useContext } from 'react';
import { DataContext, Data1Context } from './Main';

function ChildC() {
  const name = useContext(DataContext);
  const bachelor = useContext(Data1Context);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Use Context Hooks Assignment</h1>
      <h4 className="my-3">React JS Project</h4>
      <h1>My name is {name} and I have just completed {bachelor}</h1>
    </div>
  );
}

export default ChildC;
