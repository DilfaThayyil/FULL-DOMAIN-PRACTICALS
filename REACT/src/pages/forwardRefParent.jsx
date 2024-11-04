import React, { forwardRef, useRef } from "react"

const CustomInput = forwardRef((props,ref)=>{
    return <input ref={ref} {...props}/>
})

function ParentComponent(){
    const inputRef = useRef(null)
    const focusInput = ()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    return (
        <div>
            <CustomInput ref={inputRef} placeholder='Type something...'/>
            <button onClick={focusInput}>Focus the input</button>
        </div>
    )
}5

export default ParentComponent