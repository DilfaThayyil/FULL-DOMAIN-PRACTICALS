class Person {
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hello dear ${this.name}`)
    }
}

let person = new Person('Dilfa')
person.greet()

//Object destructuring
const individ = {name:'jeena',age:40}
const {name,age} = individ
console.log(individ.name)