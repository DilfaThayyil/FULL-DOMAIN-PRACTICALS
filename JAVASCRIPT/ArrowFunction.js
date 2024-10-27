let add = (a,b)=>a+b
//shorter syntax for writing functions

let person = {
    name : "Dilfa",
    age : 20,
    greeting : ()=>{
        console.log(`Hello ${this.name}`) //Hello undefined
    }
}
person.greeting()


let person1 = {
    name : "Shibil",
    city : "pattambi",
    greeting(){
        console.log(`Hello ${this.name}`) //Hello shibil
    }
}
person1.greeting()