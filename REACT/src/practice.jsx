// //useRef
// import { useRef } from "react"
// function UnControlled (){
//     const inputRef = useRef(null)
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         alert(`${inputRef.current.value}`)
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" ref={inputRef}/>
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     )
// }

// export default UnControlled



// //forwardRef

// const ChildRef = forwardRef((props,ref)=>{
//     return (
//         <div>
//             <input ref={ref} {...props}/>
//         </div>
//     )
// })

// const ParentRef = ()=>{
//     const inputRef = useRef(null)
//     const focusInput = ()=>{
//         if(inputRef.current){
//             inputRef.current.focus()
//         }
//     }
//     return (
//         <div>
//             <ChildRef ref={inputRef} placeholder="Type Something.."/>
//             <button onClick={focusInput}>clicke me</button>
//         </div>
//     )
// }

// export default ParentRef

// //custom hook

// export function useCounter(initialValue){
//     const [count,setCount] = useState(initialValue)
//     const increment = ()=>setCount(count+1)
//     const decrement = ()=>setCount(count-1)
//     const reset = ()=>setCount(0)
//     return {increment,decrement,reset}
// }


// //inside another component

// export function Counter(){
//     const {count,increment,decrement,reset} = useCounter(3)
//     return (
//         <div>
//             <button onClick={increment}>increment</button>
//             <button onClick={decrement}>decrement</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
// }

