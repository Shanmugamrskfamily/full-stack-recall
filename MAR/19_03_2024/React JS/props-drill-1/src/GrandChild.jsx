import React, { useState } from 'react'

function GrandChild(props) {
    const [msg,setMsg]=useState('');

    const handleToParent=()=>{
        props.grandChildToParent(msg);
    }

    const handleToChild=()=>{
        props.grandChildtochild(msg);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>GrandChild Component</h1>
        <div>
            <p>Message From Parent: {props.parentToGrandChild}</p>
            <p>Message From Child: {props.childToGrandChild}</p>
        </div>
        <div>
            <label htmlFor="msg" style={{marginRight:'10px'}}>Enter Message to Send</label>
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
            <br />
            <button onClick={handleToParent}>Send To Parent</button>
            <button onClick={handleToChild}> Send To Child</button>
        </div>
    </div>
  )
}

export default GrandChild