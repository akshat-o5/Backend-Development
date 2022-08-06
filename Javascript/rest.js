
// Rest Operator

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// const mSum = (num1, num2) => console.log(num1 + num2)

const mSum = (...args) => {
    let sum = 0
    for(let i = 0; i < args.length; i++){
        sum = sum + args[i]
    }
    console.log(sum)
}

mSum(1, 2, 3, 4, 5)