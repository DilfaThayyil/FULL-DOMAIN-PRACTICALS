import { useEffect, useReducer, useState } from "react"


let initialState = {count:0}
function reducer(state,action){
    switch(action.type){
        case 'Increment':
            return {count:state.count+1}
        case 'Decrement':
            return {count:state.count-1}
        case 'Reset':
            return initialState
        default:
            throw new Error()
    }
}
const Counterr = ()=>{

    const [state,dispatch] = useReducer(reducer,initialState)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        let timer = setInterval(()=>setCount(count+1),1000)
        return (()=>clearInterval(timer))
    },[count])

    return (
        <div>
            {count}
            <h2>useReducer</h2>
            <p>count : {state.count}</p>
            <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
        </div>
    )

}

export default Counterr