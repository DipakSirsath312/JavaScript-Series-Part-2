// Nested if-else.
// Nesting is writing if-else inside if-else statements.it can have many levels.

/*
if marks >= 33
    if marks >= 80 ------|
        print "O"        |
    else                 |  Nested if-else
        print "A"  ------|    
else 
    print "better luck next time!"
*/

let marks = 86;

if(marks >= 35){
    console.log("Pass")
    if(marks >= 80){
        console.log("Grade:- O")
    }else{
        console.log("Grade:- A")
    }
}else{
    console.log("better luck next time!")
}