// const person = {name:"john",age:20}
// const {name,age} = person

// console.log(name)
// console.log(age)


/// call apply bind


function greet(name){
    console.log(`${name}`)
}
const person = {
    name : 'Alice'
}

greet.call(person)
greet.apply(person,['Hi'])

const greetAlice = greet.bind(person,'Hey')
greetAlice()
