
// filter() function

// IT ITERATES THROUGH THE ARRAY TO CREATE A NEW ARRAY . YPU CAN DECIDE WHICH ELEMENTS SHOULD BE ADDED IN THE NEW ARRAY BASED ON SOME CONDITIONS.




const numArr = [ 1, 2, 3, 4, 5]

const resultArr = numArr.filter((item) => {
    // console.log(item)
    return item%2==0
})

console.log('Result arra =>', resultArr)