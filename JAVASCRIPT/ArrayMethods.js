// //push
// let arr = [4,2,8,1,0,6]
// arr.push(34)
// console.log(arr)

// //pop
// let arr1 = [4,2,8,1,0,6]
// let res = arr1.pop()
// console.log(arr1)
// console.log(res)

// //map
// let arr2 = [4,2,8,1,0,6]
// let doubled = arr2.map((a)=>a*2)
// console.log(arr2)
// console.log(doubled)

// //filter
// let arr3 = [4,2,8,1,0,6]
// let filtered = arr3.filter((a)=>a%2===0)
// console.log(arr3)
// console.log(filtered)

// //reduce
// let arr4 = [4,2,8,1,0,6]
// let sum = arr4.reduce((a,b)=>a+b,0)
// console.log(arr4)
// console.log(sum)

// //Array cloning
// let arr5 = [4,2,8,1,0,6]
// let cloned = [...arr5]
// console.log(arr5)
// console.log(cloned)

// //forEach
// let arr6 = [4,2,8,1,0,6]
// arr6.forEach((a)=>a/2)
// console.log(arr6)

// // //callback
// // function greet(name,callback){
// //     console.log('hello ',name)
// //     greet()
// // }
// // greet('Shibil',function(){console.log('Callback executed')}) 

// //splice
// let arr7 = [4,2,8,1,0,6]
// arr7.splice(2,0,9)
// console.log(arr7)

// //Array.from
// const str = 'hello'
// const set = new Set()
// const arr0 = Array.from(str)
// console.log(arr0)

// //structuredClone(deepclone)
// let original = [1,[2,3],{a:5}]
// let clone = structuredClone(original)
// console.log(clone)

// //using recursion
// function deepClone(arr){
//     if(arr===null||typeof arr!==Array){
//         return arr
//     }
//     let clone
//     if(Array.isArray(arr)){
//         clone = []
//     }else{
//         clone = {}
//     }
//     if(Array.isArray(clone)){
//         clone = deepClone(clone)
//     }
//     return clone
// }
// console.log(deepClone(original))
