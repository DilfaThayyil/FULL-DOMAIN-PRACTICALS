function greet(name,callback){
    console.log("Hello ",name)
    callback()
}

function say(){
    console.log('goodbye')
}

greet('Alice',say)