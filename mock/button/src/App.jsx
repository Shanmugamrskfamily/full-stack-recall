import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [style,setStyle]=useState('none');

const showMsg=()=>{
  if(style==='none'){
    setStyle('block');
  }
  else{
    setStyle('none');
  }
}

  return (
<div>
  <button onClick={showMsg}>Click to Show</button>
  <p style={{display:style}}>This is Message</p>
</div>
  )
}

export default App
