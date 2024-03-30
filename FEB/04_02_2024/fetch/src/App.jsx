import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const [visible,setVisible]=useState(false);
  const [but,setBut]=useState('SHOW DATA');

  const showData=()=>{
    if(!visible){
      setVisible(true);
      setBut('HIDE DATA')
    }
    else{
      setVisible(false);
      setBut('SHOW DATA')
    }
  }


  return (
    <div>
      <h1>Data From API</h1>
      <div>
        <button onClick={showData}>{but}</button>
        <ol>
          {visible&&data.map(item=>(
            <li key={item.id}>{item.name}- {item.email}</li>
          )
          )}
        </ol>
      </div>
    </div>
  )
}

export default App
