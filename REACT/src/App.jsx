import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Fetchdata from './pages/fetchData'
import React from 'react'
import HandleClick from './pages/righClick'
import CounterParent from './pages/counterParent'

function App() {
 
   return (
    <>
    <CounterParent/>
    </>
   )

}

export default App
