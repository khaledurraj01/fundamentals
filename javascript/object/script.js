const car = {
    name: "Fiat",
    model: "ex500",
    weight: "758kg",
    color: "white",
    start: function(){
        this.drive();
        console.log("car has started");
    },
    drive: function(){
        console.log("car is driving");
    },
};
console.log(car.weight);
console.log(car['model']);
car.start();
