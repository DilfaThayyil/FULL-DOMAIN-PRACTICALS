let globalVar = 'global variable'

function outerScope(){
    let outerVar = 'outer variable'

    function innerScope(){
        let innerVar = 'inner variable'

        console.log(innerVar)
        console.log(outerVar)
        console.log(globalVar)
    }
    innerScope()
}
outerScope()