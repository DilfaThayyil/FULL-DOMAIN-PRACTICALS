import { useState } from "react";
import CounterChild from "./counterChild";
function CounterParent(){
    const [count,setCount] = useState(0)
    const resetCounter = ()=>{
        setCount(0)
    }
    const incrementCounter = ()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>counter:{count}</h1>
            <CounterChild count={count} increment={incrementCounter} reset={resetCounter}/>
        </div>
    )
}

export default CounterParent