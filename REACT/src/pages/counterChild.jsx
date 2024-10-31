const CounterChild = ({count,increment,reset})=>{
    return(
        <div>
            <p>Current count from parent: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterChild