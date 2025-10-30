// Operators in javaScript.

// 1.Arithmatic Operators.

let a = 10;
let b = 5;
 
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
 
// Unary Operators.
console.log(a++); //10
console.log(++a); //12

// Assignment Operators.
// ( =, +=, -=, *=, %=, etc.)
b = a;
console.log(a);

b += a;
console.log(b);

// Comparison Operators.
// comparison operators to compare 2 value.

let age = 18;

console.log(age > 18); //false
console.log(age >= 18); //true
console.log(age < 18); //false
console.log(age <= 18); //true

// ==
// compare value,not type.
console.log(5 == 5) //true
console.log(5 == 4) //false
console.log(5 != 5); //false
console.log(5 != 4); //true
console.log(5 == "5"); //true
console.log(5 != "5"); //false 
console.log(4 != "5"); //true

// ===
// compares type & value.  
console.log("123" === 123); //false
console.log(5 === 5); //true
console.log(0 === ''); //false
console.log(0 === false); //false
console.log(null === undefined); //false
console.log(null);