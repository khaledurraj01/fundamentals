// Excution Context
function a(){
    b()
    console.log('I am function A ')
}
function b(){
    d()
    console.log('I am function A ')
}
function c(){
    b()
    console.log('I am function A ')
}
function d(){
    c()
    console.log('I am function A ')
}
var x = 100

a()
console.log('I am Global')