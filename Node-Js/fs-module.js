// TWO TYPES :
// 1. ASYNCHRONOUS FILE SYSTEM
// 2. SYNCHRONOUS FILE SYSTEM




// // SYNCHRONOUS FILE SYSTEM MODULES


// // TO ADD THE BUILT IN FS MODULE
// const {readFileSync, writeFileSync} = require('fs')

// console.log('start')
// const first = readFileSync('first.txt', 'utf8')
// const second = readFileSync('second.txt', 'utf8')

// console.log(first, second)

// writeFileSync('result.txt', `Here is the result: ${first}, ${second} `)

// console.log('done with the task')

// console.log('starting the next task')




// // ASYNCHRONOUS FILE SYSTEM MODULES

// const {readFile, writeFile} = require('fs')

// console.log('start')
// readFile('first.txt', 'utf8', (err, result) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
//     console.log(first)
//     readFile('second.txt', 'utf8', (err, result) =>{
//         if (err) {
//             console.log(err)
//             result
//         }
//         const second = result
//         console.log(second)
//         writeFile('result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) =>{
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log('done with the task')
//         })
//     })
// })
// console.log('starting next task')











// TO ADD THE BUILT IN FS MODULE
const fs = require('fs')

// reafile() : prints content of file.
// it takes a filename, type of encoding and error  and data as paramenets. it hen calls a callback function. if there is any eroor in file, then it will print error, else print data.
fs.readFile('first.txt', 'utf8', (err, data) => {
    console.log(err, data)
})