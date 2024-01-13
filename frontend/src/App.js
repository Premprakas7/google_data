import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [data, setData]=useState([]);

  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <div className="ml-[30%]">
      <table className="border">
            <tr className="border">
                <th className="border p-4">Company</th>
                <th className="border p-4">Contact</th>
                <th className="border p-1">Country</th>
            </tr>
            <tr>
                <th className="border p-4">Alfreds Futterkiste</th>
                <th className="border p-4">Maria Anders</th>
                <th className="border p-4">Germany</th>
            </tr>
      </table>
    </div>
      
    </div>
  );
}

export default App;