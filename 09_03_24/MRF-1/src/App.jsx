import {Router, BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Map_1 } from './Map_1'
import { Reduce_1 } from './Reduce_1'
import { Populate } from './Populate'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Map_1/>}/>
      <Route path='/reduce' element={<Reduce_1/>}/>
      <Route path='/populate' element={<Populate/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App
