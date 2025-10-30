// Logical Operators.
// Logical Operators to combine expressions.

// && Logical AND   (exp1) && (exp2)

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// console.log(5 > 3 && 3 > 1); //true
// console.log(5 > 1 && 3 < 1); //false
// console.log(5 < 1 && 3 > 1); //false
// console.log(5 < 3 && 1 > 5); //false

let marks = 80;
// if(marks >= 35 && marks <= 45){
//     console.log("Pass");
//     console.log("C");
// }else if(marks >= 45 && marks <= 60){
//     console.log("B");
// }else if(marks >= 60 && marks <= 75){
//     console.log("A");
// }else if(marks >= 75 && marks <= 100){
//     console.log("O")
// }else{
//     console.log("Better luck Next Time");
// }


// || OR Logical (exp1) || (exp2)

// console.log(true || true);
// console.log(true || false);
// console.log(false|| true);
// console.log(false|| false); 

// ! Logical NOT !(exp)

console.log(!true); //false
console.log(!false); //true

console.log(!(3 < 1));

let Marks = 60;

if((Marks > 33 && Marks <= 80) || !false){
    console.log("pass")
}else{
    console.log("fail");
}