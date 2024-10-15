import React,{useCallback, useState} from 'react'
import Callback_Child from './Callback_Child'

function UseCallBack() {
    const [add , setAdd]=useState(0)
    const [count ,addCount]=useState(0)
    const learning = useCallback(() => {
    
        console.log('Learning callback called with count:', count);
      }, [count]);
    
  return (
    <div className="container" style={{ textAlign: "center" }}>
    <h1 className="my-3"> Use CallBack Hook ,UseMemo</h1>
    <h4 className="my-3">React JS Project</h4>
    
    <Callback_Child learning={learning} count={count}/>
    <h1>Addition  {add}</h1>
    <button className='btn btn-primary' onClick={()=>setAdd(add+1)}>Addition</button>
    <h1>Count {count}</h1>
    <button className='btn btn-info' onClick={()=>addCount(count+2)}>Addition</button>
   
    </div>

  )
}

export default UseCallBack