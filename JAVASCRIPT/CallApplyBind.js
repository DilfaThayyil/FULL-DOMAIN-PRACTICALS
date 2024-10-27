// //Call
// function introduce(greeting) {
//     console.log(greeting + ', my name is ' + this.name);
//   }
  
//   const person = { name: 'Dilfa' };
  
//   introduce.call(person, 'Hello');
  

// //Apply
//   function introduce(greeting, punctuation) {
//     console.log(greeting + ', my name is ' + this.name + punctuation);
//   }
  
//   const person1 = { name: 'Dilfa' };
  
//   introduce.apply(person, ['Hi', '!']);  
  
// //Bind
//   function introduce(greeting) {
//     console.log(greeting + ', my name is ' + this.name);
//   }
  
//   const person2 = { name: 'Dilfa' };
  
//   const boundIntroduce = introduce.bind(person); 
//   boundIntroduce('Hey');  
  


// let name = {
//   firstName : "Dilfa",
//   lastName : "Thayyil",
// }
// let printFullName = function(){
//   console.log(this.firstName,this.lastName)
// }
// printFullName.call(name)

// let name2 = {
//   lastName : "Shibil",
//   firstName : "Mohammed"
// }
// //function borrowing
// printFullName.call(name2)