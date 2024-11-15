import { useEffect } from "react";

const SideEffect = ()=>{

    useEffect(()=>{
        const timer = setInterval(()=>console.log('Tick'),1000)
        return ()=>clearInterval(timer)
    },[])

}


export default SideEffect