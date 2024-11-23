

const HandleClick = ()=>{
    const handleContextMenu = (e) =>{
        e.preventDefault()
    }

    return (
        <div onContextMenu={handleContextMenu}>
            <h1>Right click is disabled on this part</h1>
        </div>
    )
}

export default HandleClick


