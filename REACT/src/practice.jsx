// //useRef

import { forwardRef, useRef } from "react";

// import { useEffect, useRef } from "react"

// const UseRef = ()=>{
//     const inputRef = useRef(null)
//     useEffect(()=>{
//         inputRef.current.focus()
//     },[])
//     return (
//         <div>
//             <h1>useRef example</h1>
//             <input type="text" ref={inputRef}/>
//         </div>
//     )
// }

// export default UseRef

//forwardRef

const ChildRef = forwardRef((props,ref)=>{
    return (
        <div>
            <input ref={ref} {...props}/>
        </div>
    )
})

const ParentRef = ()=>{
    const inputRef = useRef(null)
    const focusInput = ()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    return (
        <div>
            <ChildRef ref={inputRef} placeholder="Type Something.."/>
            <button onClick={focusInput}>clicke me</button>
        </div>
    )
}

export default ParentRef