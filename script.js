function makeKing(name = 'Joker') {
    return `The ${name}`;
}
console.log(makeKing('Clown is who?')); // 'Dark Night Rises'
console.log(makeKing()); // 'Joker'


function sum(num1, num2) {
    return num1 + num2, num3;
}

function createPerson(name, age,) {
    return {
        name: name,
        age: age
    };
}
let person = createPerson("Al Capone", 48, );
console.log(person); // { name: "Al Capone", age: 48"}

function sum(num1, num2, num3, num4) {
    return console.log(num1 * num2 * num3 * num4)
}
sum(30, 5, 7, 8)

let arrowSum = (a, b, c, d) => {
    return a + b + c - d;
};
console.log(arrowSum(10, 10, 10, 10)); // 20

let globalVar = "The world is burning and no one is doing anything about it";

function checkScope() {
    return globalVar; // look up
}

console.log(checkScope()); // Outputs "The world is burning and no one is doing naything about it"
console.log(globalVar); // look up


function outerFunction() {
    let outerVar = "I want the world Chico, whats in it and everything that comes with it";
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}

let myClosure = outerFunction(); // outerFunction has finished executing here
myClosure(); // Logs: "I want the world Chico, whats in it and everything that comes with it"

function createCounter() {
    let count = 50;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
    };
}

let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 1
console.log(counter.decrement()); // 1