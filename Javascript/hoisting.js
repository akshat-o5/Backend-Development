// The mechanisms where varibles and functions can be used before declaring is known as variable hoisting in javascript



// Variable Hoisting

num1 = 10

console.log(num1)

var num1
 
 
str1 = 'akshat'

console.log(str1)

var str1


// Function Hoisting

sum(10, 5)
sum(10, 6)

function sum(num1, num2){
    console.log(num1 + num2)
}


// Hoising a variabe inside a function

sum(10, 5)
sum(10, 6)

function sum(num1, num2){
    total = num1 + num2
    console.log(total)
    var total
}