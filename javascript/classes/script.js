class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
  }
  const person1 = new Person("Sakib", 35); //create actual object
  const person2 = new Person("Tamim", 36); //create actual object

  person1.play();
  person2.play();