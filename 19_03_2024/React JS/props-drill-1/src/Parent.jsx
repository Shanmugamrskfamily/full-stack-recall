import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [msg,setMsg]=useState('');
    const [fromChild,setFromChild]=useState('');
    const [fromGrandChild,setFromGrandChild]=useState('');
    const [childData,setChildData]=useState('');
    const [grandChildData,setGrandChildData]=useState('');

    const hanldeSendToChild=()=>{
        setChildData(msg);
    }

    const hanldeSendToGrandChild=()=>{
        setGrandChildData(msg);
    }

    const handleFromChild=(d)=>{
        setFromChild(d);
    }

    const handleFromGrandChild=(d)=>{
        setFromGrandChild(d);
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Parent Component</h1>
        <div>
            <p>Message From Child: {fromChild}</p>
            <p>Message From GrandChild: {fromGrandChild}</p>
        </div>
        <div style={{textAlign:'center'}}>
            <label htmlFor="msg" style={{marginRight:'10px'}}>Enter Message to Send</label>
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
            <br />
            <button onClick={hanldeSendToChild}>Send To Child</button>
            <button onClick={hanldeSendToGrandChild}>Send to GrandChild</button>
        </div>
        <Child childToParent={handleFromChild} grandChildToParent={handleFromGrandChild} parentToChild={childData} parentToGrandChild={grandChildData}/>
    </div>
  )
}

export default Parent