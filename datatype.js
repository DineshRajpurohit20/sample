//primitives data types in JavaScript
//datatype numbers
var x = 10;
var y = 3.14;
console.log("Integer: " + x); // 10
console.log("Float: " + y); // 3.14

//datatype strings
var z = "Hello, World!";
console.log("String: " + z); // "Hello, World!"

//datatype boolean
var isTrue = true;
var isFalse = false;
console.log("Boolean true: " + isTrue); // true
console.log("Boolean false: " + isFalse); // false

//datatype null
var nullValue = null;
console.log("Null value: " + nullValue); // null

//datatype undefined
var undefinedValue;
console.log("Undefined value: " + undefinedValue); // undefined

//datatype bigint
var bigIntValue = 1234567890123456789012345678901234567890n;
console.log("BigInt value: " + bigIntValue); // 1234567890123456789012345678901234567890n

//datatype symbol
var symbolValue = Symbol("mySymbol");
console.log("Symbol value: " + symbolValue.toString()); // "Symbol(mySymbol)"

//non-primitive data types in JavaScript
//datatype object
var person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log("Object: " + JSON.stringify(person)); // {"name":"John","age":30,"isStudent":false}

//datatype array
var numbers = [1, 2, 3, 4, 5];
console.log("Array: " + numbers); // [1, 2, 3, 4, 5]

//datatype function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log("Function: " + greet("Alice")); // "Hello, Alice!"



