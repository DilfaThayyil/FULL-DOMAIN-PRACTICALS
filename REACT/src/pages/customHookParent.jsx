import UseCount from "./customHook";

const Counter = ()=>{
    
    const {count,increment,decrement,reset} = UseCount()
    return (
        <div>
            <h2>count : {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter