let x= 12;
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw{
        message: "Too High",
        name: "HighError"
    };
} catch(err) {
    console.log(err);
}
console.log("this is a test");