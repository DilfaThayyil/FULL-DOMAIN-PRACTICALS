function BuggyComponent({name}){
    if(typeof name!=='string'){
        throw new Error('invalid name prop!! expected a string.')
    }
    return <h1>Hello, {name}!</h1>
}
export default BuggyComponent