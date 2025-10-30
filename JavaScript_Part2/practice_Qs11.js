// (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let Num1 = 32; 
let Num2 = 47832; 

if((Num1 % 10) == (Num2 % 10)){
    console.log(`numbers have the same last digit which is ${Num1%10}`);
}else{
    console.log(`numbers don't have the same last digit`);
}