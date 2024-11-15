import { useState } from "react"
import Child from "./child"

const Parent = ()=>{
    const [data,setData] = useState('')

    function handleData(data){
        setData(data)
    }

    return (
        <div>
            <h2>message from child : {data}</h2>
            <Child sendMessage={handleData}/>
        </div>
    )
}