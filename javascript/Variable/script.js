var varVariable = "This is var";
console.log(varVariable);
if (true) {
    var varVariable = "This is var again";
}
console.log(varVariable);
// if (true) {
//     let letVariable = "This is let";
//     console.log(letVariable);
// }

    if (true) {
        const constVariable = {
            name: "javaScript",
            age: "25 years",
        };
        constVariable.name = "JS";
        console.log(constVariable);
    }
