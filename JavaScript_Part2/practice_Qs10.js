// Write a program to find the largest of 3 numbers.

let a = 13;
let b = 23;
let c = 69;

if(a > b){
    if(a > c){
        console.log(`${a} is largest`)
    }else{
        console.log(`${c} is largest`)
    }
}else{
    if(b > c){
        console.log(`${b} is largest`);
    }else{
        console.log(`${c} is largest`)
    }
}
