let person = {
    name : "Dilfa",
    age : 20,
    address : {
        city : "Vengara"
    }
}
Object.seal(person)
person.name = "Shibil"  //will change
console.log(person)
person.hobbie = "Gaming"  //wont add
console.log(person)
person.address.city = "Pattambi"  //will change
console.log(person)  
delete person.name  //wont delete
console.log(person) 


let person1 = {
    name : "Dilfa",
    age : 20,
    address : {
        city : "Vengara"
    }
}
Object.freeze(person1)
person1.name = "Shibil"  //wont change
console.log(person1)
person1.hobbie = "Gaming"  //wont add
console.log(person1)
person1.address.city = "Pattambi"  //will change
console.log(person1)
delete person1.name  //wont delete
console.log(person1)