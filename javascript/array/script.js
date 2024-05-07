const fruits = ["banana", "Orange", "Apple", "mango"];

// fruits[4] = "pineapple";
// fruits[5] = "pineapples";
// fruits[6] = "pineappless";
// fruits[7] = "pineapplesss";
// console.log(fruits[fruits.length -1]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i);
//     console.log(fruits[i]);
    
// }
function myFunction(value){
    console.log(value);
}
fruits.forEach(myFunction);
console.log("Finished");