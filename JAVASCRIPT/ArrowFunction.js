// let add = (a,b)=>a+b
// //shorter syntax for writing functions

// let person = {
//     name : "Dilfa",
//     age : 20,
//     greeting : ()=>{
//         console.log(`Hello ${this.name}`) //Hello undefined
//     }
// }
// person.greeting()


// let person1 = {
//     name : "aaaa",
//     city : "bbbb",
//     greeting(){
//         console.log(`Hello ${this.name}`) //Hello aaaa
//     }
// }
// person1.greeting()



//using arrow function as a constructor
const Person = (name) => {
    this.name = name;
  };
  // This will throw an error
  const john = new Person('John'); //Person is not a constructor bcuz it uses an arrow fn (arrow fn doesn't have its own this context)
  