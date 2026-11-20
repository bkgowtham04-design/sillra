import React from 'react'

import { useState } from "react";

import axios from "axios";

const App = () => {

  const [storing,setStoring] = useState([])

  

  const [search, setSearch] = useState("");

  const datas =async(e)=>{

   e.preventDefault();


    try {

      


      
      const api = await axios.get("https://jsonplaceholder.typicode.com/users")

      console.log(api.data);
      

      setStoring(api.data)

      
      
    } catch (error) {

      console.log(error);

      alert(error.msg)
      

      
    }



  }
  return (
    <>




<input type="text" placeholder="Enter the name" />
    <button onClick={datas}>Get user</button>

    {storing.map((e) => (
  <div key={e.id}>


    <p>Name: {e.name}</p>

    <p>UserName: {e.username}</p>

    <p>Email: {e.email}</p>

     <p>City: {e.address.city}</p>

       <p>phone: {e.phone}</p>
  </div>
))}:
    
    </>
  )
}

export default App