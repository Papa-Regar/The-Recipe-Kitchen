import React, { useState, useEffect } from 'react'
import axios from "axios";

const Cooking = () => {

  const [query, setQuery]= useState('')
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e9a0daa4a8msh9d1b894afd4f1e8p11a838jsn08fbdbe1c607',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  
  useEffect(()=>{
  fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=cheese', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data=>setQuery(data.hints))
    .catch(err => console.error(err));
  },[])
  return (
    <div>
     
    </div>
  )
}

export default Cooking
