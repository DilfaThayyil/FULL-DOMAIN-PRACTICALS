import { useEffect, useRef } from "react";

const Form = ()=>{
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default Form