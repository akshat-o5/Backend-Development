
// map() FUNCTION:

// IT ITERATES THE ARRAY FOR US AND WE CAN PASS A CALL BACK FUNCTION TO PERFORM SOME OPERATION ON THE EACH ARRAY ITEM.

// THE UPDATED VALUES CAN BE RETURNES BY THE CALL BACK FUNCTION TO CREATE A NEW ARRAY.




const mArr = [1, 2, 3, 4, 5]

// const doubleValues = (items) => {
//     return items*2
// }

// let newArr = []
// for (let i = 0; i < mArr.length; i++) {
//     // newArr.push(mArr[i] *2)
//     // newArr.push(doubleValues(mArr[i]))
// }

let newArr = mArr.map((item, i) => {
    console.log(`Item at pos: ${i} is ${item}`)
    return item *2
})

console.log(newArr)
