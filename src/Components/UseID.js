import React, { useId } from 'react';

function SimpleForm() {
  const id = useId();

  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
    <h1 className="my-3">Use ID Hook</h1>
    <h4 className="my-3">React Js project</h4>
      <label htmlFor={`${id}-name`} style={{marginRight:"20px"}}>Name:</label>
      <input id={`${id}-name`} type="text" style={{marginRight:"20px"}}/>

      <label htmlFor={`${id}-email`} style={{marginRight:"20px"}}>Email:</label>
      <input id={`${id}-email` } type="email" style={{marginRight:"20px"}}/>
    </div>
  );
}

export default SimpleForm;
