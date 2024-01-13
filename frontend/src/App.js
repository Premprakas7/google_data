import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"

function App() {
  const [data, setData]=useState([]);

  useEffect(()=>{
    axios.get("https://goo-t1to.onrender.com/users")
    .then((res)=>setData(res.data))
    .catch((e)=>console.log(e))
  },[])
  console.log(data)
  return (
    <div className="App">
      {data.map((e)=>
      <div className="ml-[30%]">
      <table className="border">
            <tr className="border">
                <th className="border p-4 ">
                  <p>{e.call} Calls</p>
                  <img src='https://cdn-icons-png.flaticon.com/128/1151/1151429.png'
                   className='w-[3rem] ml-[3rem]' alt=''/>
                </th>
                <th className="border p-4">
                <p>{e.message} Message</p>
                  <img src='https://cdn-icons-png.flaticon.com/128/4546/4546924.png'
                   className='w-[3rem] ml-[3rem]' alt=''/>
                   </th>
                <th className="border p-4">
                <p>{e.direction} Direction</p>
                  <img src='https://cdn-icons-png.flaticon.com/128/2500/2500144.png'
                   className='w-[3rem] ml-[3rem]' alt=''/>
                </th>
            </tr>
            <tr>
                <th className="border p-4">
                  <p>{e.visits} people visits the site</p>
                  <img src='https://cdn-icons-png.flaticon.com/128/4226/4226126.png'
                   className='w-[3rem] ml-[3rem]' alt=''/>
                  </th>
                <th className="border p-4">
                <p>{e.views} Number of views</p>
                  <img src='https://cdn-icons-png.flaticon.com/128/709/709612.png'
                   className='w-[3rem] ml-[3rem]' alt=''/>
                </th>
                <th className="border p-4">
                  <p> {e.search} Searchs</p>
                  <img src='https://cdn-icons-png.flaticon.com/128/751/751463.png'
                   className='w-[3rem] ml-[3rem]' alt=''/> </th>
            </tr>
      </table>
    </div>
    )}
      
    </div>
  );
}

export default App;