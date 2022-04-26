import React, { useEffect, useState } from 'react'

const App = () => {
    const [msg,setMsg]=useState('WELCOME')

    useEffect(()=>{
        console.log('THE STATE IS UPDATED');
    },[msg])

    useEffect(()=>{
        setInterval(()=>{
            setMsg('WELCOME')
        },2000)
    },[])
  return (
    <div>
        <h2> MESSAGE: {msg} </h2>
    </div>
  )
}

export default App