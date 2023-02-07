import './App.css';
import React, {useState, useEffect} from 'react';
import Homepage from "./Pages/homepage"
import Lists from "./Pages/lists"
import Component from "./Components/placard"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/members").then(
      res=>res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  },[])
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/lists' element={<Lists/>}/>
        </Routes>

        {/* {(typeof data.members === 'undefined') ? (
          <p> Loading ... </p>
        ) : (
          data.members.map((member,i)=>{
            return <p key={i}>{member}</p>
          })
        )} */}
      </BrowserRouter>

  );
}

export default App;
