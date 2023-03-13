import React from 'react'
import {useDispatch, useSelector, } from "react-redux"
import { buyCake } from '../redux'
const HookCakeContainer=(props)=>{
    const numOfCakes = useSelector((state)=>state.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>No Of Cake-{numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer
