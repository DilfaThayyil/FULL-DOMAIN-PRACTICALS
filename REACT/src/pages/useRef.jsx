import { useRef, useEffect } from "react"

const InputComponent = ()=>{
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}
export default InputComponent