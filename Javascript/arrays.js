
// ARRAY METHODS


let myArr = ["FAN", "CAMERA", 34, null, true];
console.log(myArr.length);

myArr.pop();
console.log(myArr);

myArr.push("HARRY");
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.unshift("Akshat");
console.log(myArr);

console.log(myArr.unshift());

myArr.sort();
console.log(myArr);

myArr.reverse();
console.log(myArr)




// ES6 FUNCTIONS:


// ES6 INTRODUCED TWO NEW METODS TO SEARCH FOR ELEMENTS INSIDE THE ARRAY.

// -> find(): IT IS USED TP SEATRCH FOR AN ELEMENT IN THE ARRAY THAT MATCHES SOME CONDITION. IT RETURNS THE FIRST ELEMENT THAT MATCHES THE CONDITION.

// -> findIndex() : IT IS QUITE SIMILAR TO THE find() METHOD. THE DIFERENCE IS THAT findIndex() METHOD RETURNS THE INDEX OF THE ELEMENT INSTEAD OF THE ELEMENT ITSELF.





const numArr = [1, 2, 3, 4, 5, 6, 7]

const result = numArr.find((item) => {
    return item%2==0
})

const result1 = numArr.findIndex((item) => {
    return item%2==0
})

console.log(result)
console.log(result1)