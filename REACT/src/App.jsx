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
import { Counter } from './pages/useReducer'
import Parent from './pages/parent'
import Counterr from './pages/counterrr'
import SideEffect from './pages/useEffect'



function App() {

 
   return (
    <>
    <SideEffect/>
    </>
   )

}

export default App
