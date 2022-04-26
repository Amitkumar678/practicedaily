import React from 'react'
import { fname } from './App'
const CompoC = () => {
  return (
   <>
        <fname.Consumer>
            {
               (name)=>{
                 return(
                   <h2> THIS IS MY {name} </h2>
                 )
               }
            }
        </fname.Consumer>
        </>
  )
}

export default CompoC