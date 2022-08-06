// Spread Operator

// Spread Operator allows arrays and objectsyo be expanded into :

// -> elements in case of array

// -> key-value pairs in case of objects




let mArr1 = [1, 2, 3, 4, 5]

console.log(...mArr1)




// let mArr2 = mArr1

// console.log(mArr2)




let mArr2 = [...mArr1]

mArr1.push(6)

console.log(mArr2)

console.log(mArr1)




// SPREAD OPERATOR IS ALSO USED TO CONCATENATE TWO ARRAYS

// let mArr3 = mArr1.concat(mArr2)

let mArr3 = [...mArr1, ...mArr2]

console.log(mArr3)




let mObj1 = {
    name: 'Akshat'
}

console.log(mObj1)




let mObj2 = {
    age : 28
}

console.log(mObj2)




let mObj3 = {...mObj1, ...mObj2}

console.log(mObj3)