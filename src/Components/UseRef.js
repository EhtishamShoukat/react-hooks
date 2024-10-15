import React, { useState,useRef } from 'react'

export default function UseRef() {
const refElement =useRef("")
const [name,setName]=useState("SHAMI")
function Reset(){
setName("")
refElement.current.focus()
}

function handleInput() {
    refElement.current.style.color = "red"; 
    refElement.current.value = "EHTISHAM SHOUKAT";
  }
  return (
    <div className="container" style={{ textAlign: "center" }}>
    <h1 className="my-3"> Use Ref Hooks</h1>
    <h4 className="my-3">React JS Project</h4>
    <p>Use Ref is use to manipulate the dom</p>
    <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
    <button  className="btn btn-danger mx-2"onClick={Reset}>Reset</button>
    <button  className="btn btn-success mx-2"onClick={handleInput}>HandleInput</button>
      
    </div>
  )
}
