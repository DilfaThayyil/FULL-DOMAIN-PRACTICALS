

const Child = ({sendMessage})=>{

    function handleClick(){
        sendMessage('Heyy Girl..!!')
    }

    return (
        <div>
            <button onClick={handleClick}>send message</button>
        </div>
    )
}

export default Child