import React, { useContext } from 'react'
import { fname } from './App'

const CompoD = () => {
    const val=useContext(fname)
  return (

   <h2> MY NAME IS {val} </h2>
  )
}

export default CompoD