// Variables

// JavaScript -- Python
var x = 10 // x = 10
let y = 20 // y = 20
// const z = 30 // z = 30
// z = 40 // TypeError: Assignment to constant variable.
console.log(x + y) // print(x + y)
console.log(x + y + z) // print(x + y + z)
// Operators in javascript: +, -, *, /, %, **, ++, --

// Data Types
// Number
let num = 10
// String
let str = "Hello World"
// Boolean
let bool = true
// Array
let arr = [1, 2, 3, 4, 5]
// Object (Dictionary)
let obj = {
    name: "John",
    age: 20,
    city: "New York"
}

// Functions
function add(a, b) {
    return a + b
}

// Function Expression
let add = function(a, b) {
    return a + b
}

// Arrow Function
let add = (a, b) => {
    return a + b
}

// Arrow Function (Single Line)
let add = (a, b) => a + b

// Arrow Function (Single Parameter)
let square = x => x * x

// Arrow Function (No Parameter)
let greet = () => "Hello World"

// Array Methods
// forEach: Iterates over an array and executes a function on each element
arr = [1, 2, 3, 4, 5]

arr.forEach((item, index) => {
    console.log(item, index)
})

// map: Iterates over an array and executes a function on each element and !returns a new array
arr = [1, 2, 3, 4, 5]

newArr = arr.map((item, index) => {
    return item * 2
})

// filter: Iterates over an array and executes a function on each element and !returns a new array based on the condition
arr = [1, 2, 3, 4, 5]

newArr = arr.filter((item, index) => {
    return item % 2 == 0
})
