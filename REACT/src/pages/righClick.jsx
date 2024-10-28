

const handleClick = ()=>{


    const handleContextMenu = (e) =>{
        e.preventDefault()
    }

    return (
        <div onContextMenu={handleContextMenu}>
            <h1>Right click is disabled on this page</h1>
        </div>
    )
}

export default handleClick