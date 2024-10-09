function add(a){
    return function multiple(b){
        return a*b
    }
}

const multiple = add(3)(5)
console.log(multiple)