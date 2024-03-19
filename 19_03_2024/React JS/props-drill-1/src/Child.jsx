import React, { useState } from 'react'
import GrandChild from './GrandChild';

function Child(props) {
    const[msg,setMsg]=useState('');
    const [fromGrandChild,setFromGrandChild]=useState('');
    const [data,setData]=useState('');

    const handleGrandChildtochild=(d)=>{
        setFromGrandChild(d);
    }
    
    const handleGrandChildToParent=(d)=>{
        props.grandChildToParent(d);
    }

    const handleSentToGrandChild=()=>{
        setData(msg)
    }

    const handleChildToParent=()=>{
        props.childToParent(msg);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Child Component</h1>
        <div>
            <p>Message From Parent: {props.parentToChild}</p>
            <p>Message From GrandChild: {fromGrandChild}</p>
        </div>
        <div>
            <label htmlFor="message">Enter Message to Send</label>
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
            <br />
            <button onClick={handleChildToParent}>Send to Parent</button>
            <button onClick={handleSentToGrandChild}>Send to GrandChild</button>
        </div>
        <GrandChild grandChildtochild={handleGrandChildtochild} grandChildToParent={handleGrandChildToParent} parentToGrandChild={props.parentToGrandChild} childToGrandChild={data}/>
    </div>
  )
}

export default Child