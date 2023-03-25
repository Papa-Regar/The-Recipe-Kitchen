import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataFetch = () => {

    const [post, setPost]= useState({})
    const [id, setId]= useState(1);
    const [enteredId, setEnteredId]= useState(1)
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${enteredId}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [enteredId]);

    const onChangeHandler=(e)=>{
        setId(e.target.value)
    }

    const onSubmitHandler=()=>{
        setEnteredId(id)
    }

  return (
    <div>
        
        <input type='text' value={id} onChange={onChangeHandler} />
        <button type='submit' onClick={onSubmitHandler}>Hantar</button>
      <div>{post.title}</div>

    </div>
  )
}

export default DataFetch
