import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [users,setData]=useState("")

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((resp) => resp.json())
      .then((result) => {
        console.warn(result.data); // Logging the result directly, as it's an array of posts
      })
      .catch((error) => {
        // console.error('Error:', error);

      {

        setData({users:result.data})
      }
      });
  }, []); // Make sure to provide an empty dependency array to useEffect so that it runs only once

  return (
    <div className="App">
      <h1>Fetching data using Fetch API</h1>

      {
        users?
        users.map((item,i)=>{
        <>
        
        <p>{i}--- {item.first_name} {item.last_name} </p>
        
        </>
        })
        :
        null
      }
    </div>
  );
}

export default App;
