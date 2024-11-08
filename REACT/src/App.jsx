import { useState , useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Fetchdata from './pages/fetchData'
import React from 'react'
import HandleClick from './pages/righClick'
import CounterParent from './pages/counterParent'
import InputComponent from './pages/useRef'
import ParentComponent from './pages/forwardRefParent'
import Counter from './pages/customHookParent'


function App() {
   const [count,setCount] = useState(0)

 
   return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
      <button onClick={()=>setCount((prev)=>prev-1)}>decrement</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </div>
   )

}

export default App
