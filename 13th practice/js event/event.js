// function myFunction(){
//     console.log("Hello world");
// }
// const button = document.getElementById('button');
// button.addEventListener('click', myFunction);

function myFunction(text){
    console.log(text)
}
const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', function(){
    myFunction ("hello world")
}, true);
container.addEventListener('click', function(){
    myFunction ("hello div")
}, true);