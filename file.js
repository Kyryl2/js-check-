// const array = [1, 2, 3, 4, 5, 5];

// for (const value of array) {
//   console.log(value);
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// console.log(x);
// var x = 2;

// mainFunction(callbackFunction);

// function mainFunction(callback) {
//   callback();
// }

// function callbackFunction() {
//   console.log("Це колбек функція!");
// }

// const add = (a, b) => a + b;

// console.log(add(1, 1));

// function myFunc() {
//   console.log(arguments);
// }

// myFunc(1, 2, 3);

// setInterval(function hello() {
//   console.log("ТЫ" + "Молодец");
// }, 5000);
// setInterval();

// function greet() {
//   console.log("Привіт, " + this.name);
// }

// var person = {
//   name: "Василь",
// };

// greet.apply(person); // Викликати функцію greet з контекстом об'єкта person

// const obj = {
//   value: 42,
// };

// function getValue() {
//   console.log(this.value);
// }

// getValue.call(obj); // змінюємо контекст функції на obj

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return (
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

let person1 = new Person("John", 30);
console.log(person1.greet());
